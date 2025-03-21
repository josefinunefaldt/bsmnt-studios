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
                ImgUrls = advert.ImgUrls?.Select(img =>
             $"https://bsmntltd-efe5awdggsfvhkbk.westeurope-01.azurewebsites.net{img}"
        ).ToList(),
                Description = advert.Description,
                DateCreated = advert.DateCreated,
                UserId = advert.UserId,
                User = UserMapping.UserToUserResponse(advert.User!)
            };
        }

        public static Advert AdvertRequestToAdvert(AdvertRequest request, User user)
        {
            return new Advert()
            {
                UserId = request.UserId,
                Offering = request.Offering,
                Location = request.Location,
                Description = request.Description,
                DateCreated = DateTime.UtcNow,
                User = user
            };
        }

    }
}
