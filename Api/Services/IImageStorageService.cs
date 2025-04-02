

namespace Api.Services
{
    public interface IImageStorageService
    {
        Task<string> UploadImageAsync(Stream imageStream, bool useBaseUrl);
        Task<Stream> DownloadImageAsync(string imageName);
    }
}