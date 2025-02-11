

namespace Api.Data.Responses
{
    public class AdvertResponse
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public bool Offering { get; set; }
        public string? Location { get; set; }
        public List<string>? ImgUrls { get; set; }
        public required string Description { get; set; }
        public DateTime DateCreated { get; set; }
    }
}