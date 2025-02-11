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
    [HttpGet]
    public async Task<ActionResult<IEnumerable<AdvertResponse>>> GetAdverts()
    {
        var adverts = await _context.Advert.ToListAsync();
        var advertResponse = adverts.Select(AdvertMapping.AdvertToAdvertResponse).ToList();

        return Ok(advertResponse);
    }

    [HttpPost]
    public async Task<IActionResult> CreateAdvert(AdvertRequest request)
    {
        var userExists = await _context.User.AnyAsync(u => u.Id == request.UserId);
        if (!userExists)
        {
            return BadRequest("User does not exist.");
        }

        var advert = AdvertMapping.AdvertRequestToAdvert(request);

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