using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Api.Data.Models;
using Api.Services;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public ContactController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> SendContact([FromBody] ContactFormModel model)
        {
            try
            {
                if (model == null)
                {
                    return BadRequest(new { success = false, message = "Request body is null" });
                }

                await _emailService.SendEmailAsync(model.Name, model.Email, model.Subject, model.Message);
                return Ok(new { success = true });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return BadRequest(new { success = false, message = ex.Message });
            }
        }

    }
}