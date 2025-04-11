using Api.Data;
using Api.Data.Responses;
using Api.Data.Requests;

namespace Api.Mapper
{
    namespace Api.Mapper
    {
        public static class AdvertMapping
        {
            public static AdvertResponse ToAdvertResponse(this Advert advert)
            {
                return new AdvertResponse()
                {
                    Offering = advert.Offering,
                    Location = advert.Location,
                    ImgUrl = advert.ImgUrl,
                    Description = advert.Description,
                    DateCreated = advert.DateCreated,
                    UserId = advert.UserId,
                    User = advert.User!.UserToUserResponse()
                };
            }

            public static Advert ToAdvert(this AdvertRequest request, User user)
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

}
