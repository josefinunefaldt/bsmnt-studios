
using Api.Migrations;
using Microsoft.AspNetCore.Mvc;

namespace Api.Data.Requests
{
    public class AdvertRequest
    {
        public bool Offering { get; set; }
        public string? Location { get; set; }
        public required string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid UserId { get; set; }
        public User? User { get; set; }
    }
}