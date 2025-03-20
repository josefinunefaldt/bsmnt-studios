using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

namespace Api.Services;
public class EmailService : IEmailService
{
    private readonly IConfiguration _configuration;

    public EmailService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<bool> SendEmailAsync(string name, string email, string subject, string message)
    {
        var emailMessage = new MimeMessage();
        emailMessage.From.Add(new MailboxAddress(name, email));
        emailMessage.To.Add(new MailboxAddress("jojo", _configuration["EmailSettings:Email"]));
        emailMessage.Subject = subject;

        var bodyBuilder = new BodyBuilder
        {
            TextBody = $"From: {name} ({email})\n\n{message}"
        };

        emailMessage.Body = bodyBuilder.ToMessageBody();

        using var client = new SmtpClient();

        client.ServerCertificateValidationCallback = (s, c, h, e) => true;
        await client.ConnectAsync("smtp.gmail.com", 465, SecureSocketOptions.SslOnConnect);

        await client.AuthenticateAsync(_configuration["EmailSettings:Email"], _configuration["EmailSettings:Password"]);
        await client.SendAsync(emailMessage);
        await client.DisconnectAsync(true);

        return true;
    }
}
