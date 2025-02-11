using Api.Data;
using Api.Data.Responses;
using Api.Data.Requests;

namespace Api.Mapper
{
    public static class AdvertMapping
    {
        public static AdvertResponse AdvertToAdvertResponse(Advert advert)
        {
            return new AdvertResponse()
            {
                Offering = advert.Offering,
                Location = advert.Location,
                ImgUrls = advert.ImgUrls,
                Description = advert.Description,
                DateCreated = advert.DateCreated,
                UserId = advert.UserId,
            };
        }

        public static Advert AdvertRequestToAdvert(AdvertRequest request)
        {
            return new Advert()
            {
                UserId = request.UserId,
                Offering = request.Offering,
                Location = request.Location,
                ImgUrls = request.ImgUrls,
                Description = request.Description,
                DateCreated = DateTime.UtcNow,
            };
        }
    }
}
