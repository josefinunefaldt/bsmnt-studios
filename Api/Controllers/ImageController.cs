using Api.Services;
using Microsoft.AspNetCore.Mvc;
namespace Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ImageController : ControllerBase
{
    private readonly IImageStorageService _imageStorageService;

    public ImageController(IImageStorageService imageStorageService)
    {
        _imageStorageService = imageStorageService;
    }

    [HttpPost("Upload")]
    public async Task<IActionResult> Upload(IFormFile media)
    {
        try
        {
            if (media == null || media.Length == 0)
            {
                return BadRequest("Image not selected");
            }

            using (var stream = media.OpenReadStream())
            {
                var url = await _imageStorageService.UploadImageAsync(stream, true);

                return Ok(url);
            }
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("{mediaName}")]
    public async Task<IActionResult> DownloadImage(string mediaName)
    {
        try
        {
            var mediaStream = await _imageStorageService.DownloadImageAsync(mediaName);

            return File(mediaStream, "image/jpeg");
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
