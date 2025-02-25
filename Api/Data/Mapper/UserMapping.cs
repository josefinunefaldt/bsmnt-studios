using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Api.Data;
using Api.Data.Responses;

namespace Api.Mapper;
public static class UserMapping
{
    public static UserResponse UserToUserResponse(User user)
    {
        return new UserResponse()
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email,
            About = user.About
        };
    }
}

