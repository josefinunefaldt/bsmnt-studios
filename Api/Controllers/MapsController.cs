using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MapsController : Controller
    {
        private readonly IConfiguration _configuration;

        public MapsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet("place/{id}")]
        public IActionResult GetPlaceMapUrl(string id)
        {
            var apiKey = _configuration["GOOGLE_MAPS_API_KEY"];
            if (string.IsNullOrEmpty(apiKey))
                return BadRequest("Google Maps API key not configured");

            var url = $"https://www.google.com/maps/embed/v1/place?key={apiKey}&q=place_id:{id}";
            return Ok(new { url });
        }
    }
}