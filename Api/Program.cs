using Api.Controllers;
using Api.Data;
using Api.Services;
using Azure.Storage;
using Azure.Storage.Blobs;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(options => options
    .UseSqlServer(builder.Configuration.GetConnectionString("Default")));

var storageAccount = builder.Configuration["AzureImageStorage:StorageAccount"];
var accountKey = builder.Configuration["AzureImageStorage:StorageKey"];
var containerName = builder.Configuration["AzureImageStorage:Container"];
builder.Services.AddSingleton(new BlobServiceClient(new Uri($"https://{storageAccount}.blob.core.windows.net"),
                                            new StorageSharedKeyCredential(storageAccount, accountKey)));
var baseUrl = builder.Configuration["BaseImageUrl"];
builder.Services.AddScoped<IImageStorageService, ImageStorageService>(provider =>
{
    var blobServiceClient = provider.GetRequiredService<BlobServiceClient>();
    return new ImageStorageService(blobServiceClient, containerName!, baseUrl!);
});
builder.Services.AddScoped<IEmailService, EmailService>();

var app = builder.Build();

// Add this in your app initialization code
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<ApplicationDbContext>();
    context.Database.Migrate();
}
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(policy => policy.AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowAnyOrigin());

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

app.Run();