using Api.Data;
using Api.Data.Requests;
using Api.Data.Responses;
using Api.Mapper;
using Api.Mapper.Api.Mapper;
using Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;
[ApiController]
[Route("api/[controller]")]
public class AdvertsController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IImageStorageService _imageStorageService;

    public AdvertsController(ApplicationDbContext context, IImageStorageService imageStorageService)
    {
        _context = context;
        _imageStorageService = imageStorageService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AdvertResponse>>> GetAdverts()
    {
        var adverts = await _context.Advert.Include(a => a.User).ToListAsync();
        var advertResponses = adverts
                .Select(advert => advert.ToAdvertResponse())
                .OrderByDescending(m => m.DateCreated)
                .ToList();

        return Ok(advertResponses);
    }


    [HttpPost]
    public async Task<IActionResult> CreateAdvert([FromForm] AdvertRequest request, IFormFile Photo)
    {
        try
        {
            if (string.IsNullOrWhiteSpace(request.User?.Email))
            {
                throw new ArgumentException("User email is required.");
            }

            var user = await _context.User.FirstOrDefaultAsync(u => u.Email == request.User.Email);

            if (user == null)
            {
                user = new User
                {
                    Name = request.User.Name,
                    Email = request.User.Email,
                    About = request.User.About
                };
                await _context.User.AddAsync(user);
                await _context.SaveChangesAsync();
            }

            var currentMonth = DateTime.UtcNow.Month;
            var currentYear = DateTime.UtcNow.Year;

            var hasAdThisMonth = await _context.Advert
                .Where(a => a.UserId == user.Id
                       && a.DateCreated.Month == currentMonth
                       && a.DateCreated.Year == currentYear)
                .AnyAsync();

            if (hasAdThisMonth)
            {
                return BadRequest("You can only create one advertisement per month.");
            }

            var advert = request.ToAdvert(user);

            if (Photo != null)
            {
                using (var stream = Photo.OpenReadStream())
                {
                    var url = await _imageStorageService.UploadImageAsync(stream, true);
                    advert.ImgUrl = url;
                }
                // var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

                // if (!Directory.Exists(uploadsFolder))
                // {
                //     Directory.CreateDirectory(uploadsFolder);
                // }

                // var fileName = $"{Guid.NewGuid()}_{Photo.FileName}";
                // var filePath = Path.Combine(uploadsFolder, fileName);

                // using (var stream = new FileStream(filePath, FileMode.Create))
                // {
                //     await Photo.CopyToAsync(stream);
                // }

                // var imageUrl = $"/uploads/{fileName}";
                // advert.ImgUrl = imageUrl;
            }

            await _context.Advert.AddAsync(advert);
            await _context.SaveChangesAsync();

            var response = advert.ToAdvertResponse();
            return CreatedAtAction(nameof(GetAdvert), new { Id = advert.id }, response);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Advert>> GetAdvert(Guid id)
    {
        var advert = await _context.Advert
     .Include(a => a.User)
     .FirstOrDefaultAsync(a => a.id == id);

        if (advert is null)
        {
            return NotFound();
        }

        return Ok(advert.ToAdvertResponse());
    }
}