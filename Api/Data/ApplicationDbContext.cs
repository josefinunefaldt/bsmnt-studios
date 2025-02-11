using Microsoft.EntityFrameworkCore;
namespace Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Advert> Advert { get; set; }
        public DbSet<User> User { get; set; }
    }
}