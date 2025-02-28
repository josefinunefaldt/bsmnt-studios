using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Services
{
    public interface IEmailService
    {
        Task<bool> SendEmailAsync(string name, string email, string subject, string message);
    }
}