using Azure.Storage;
using Azure.Storage.Blobs;
namespace Api.Services
{
    public class ImageStorageService : IImageStorageService
    {
        private readonly BlobServiceClient _blobClient;
        private readonly string _containerName;
        private readonly string _baseUrl;

        public ImageStorageService(BlobServiceClient blobClient, string containerName, string baseUrl)
        {
            _blobClient = blobClient;
            _containerName = containerName;
            _baseUrl = baseUrl;
        }
        public async Task<Stream> DownloadImageAsync(string imageName)
        {
            var containerClient = _blobClient.GetBlobContainerClient(_containerName);
            var blobClient = containerClient.GetBlobClient(imageName);

            var memoryStream = new MemoryStream();
            await blobClient.DownloadToAsync(memoryStream);
            memoryStream.Position = 0;
            return memoryStream;
        }

        public async Task<string> UploadImageAsync(Stream imageStream, bool useBaseUrl)
        {
            var newImageGuid = Guid.NewGuid().ToString();
            var containerClient = _blobClient.GetBlobContainerClient(_containerName);
            var blobClient = containerClient.GetBlobClient(newImageGuid);

            await blobClient.UploadAsync(imageStream);

            if (useBaseUrl)
            {
                return $"{_baseUrl.TrimEnd('/')}/{newImageGuid}";
            }
            else
            {
                return newImageGuid;
            }
        }
    }
}