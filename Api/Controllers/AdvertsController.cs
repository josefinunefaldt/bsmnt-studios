using Api.Data;
using Api.Data.Requests;
using Api.Data.Responses;
using Api.Mapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;
[ApiController]
[Route("api/[controller]")]
public class AdvertsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AdvertsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // [HttpGet]
    // public async Task<ActionResult<IEnumerable<AdvertResponse>>> GetAdverts()
    // {
    //     var adverts = await _context.Advert.Include(a => a.User).ToListAsync();

    //     var advertResponse = adverts.Select(AdvertMapping.AdvertToAdvertResponse).ToList().OrderByDescending(m => m.DateCreated);

    //     return Ok(advertResponse);
    // }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<Advert>>> GetAdverts()
    {
        try
        {
            var adverts = await _context.Advert.Include(a => a.User).ToListAsync();
            return Ok(adverts);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }

    }

    [HttpPost]
    public async Task<IActionResult> CreateAdvert([FromForm] AdvertRequest request, List<IFormFile> Photos)
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

        var advert = AdvertMapping.AdvertRequestToAdvert(request, user);

        if (Photos != null && Photos.Count > 0)
        {

            var imageUrls = new List<string>();
            var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            foreach (var photo in Photos)
            {
                var fileName = $"{Guid.NewGuid()}_{photo.FileName}";
                var filePath = Path.Combine(uploadsFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await photo.CopyToAsync(stream);
                }

                var imageUrl = $"/uploads/{fileName}";
                imageUrls.Add(imageUrl);
            }

            advert.ImgUrls = imageUrls;
        }

        await _context.Advert.AddAsync(advert);
        await _context.SaveChangesAsync();

        var response = AdvertMapping.AdvertToAdvertResponse(advert);
        return CreatedAtAction(nameof(GetAdvert), new { Id = advert.id }, response);
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

        return Ok(AdvertMapping.AdvertToAdvertResponse(advert));
    }
}