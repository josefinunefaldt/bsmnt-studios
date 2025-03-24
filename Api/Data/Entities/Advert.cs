using System.ComponentModel.DataAnnotations;
namespace Api.Data;
public class Advert
{
    public Guid id { get; set; }
    public Guid UserId { get; set; }
    public virtual User? User { get; set; }
    public bool Offering { get; set; }
    public string? Location { get; set; }
    public string? ImgUrl { get; set; }

    [RegularExpression(@"^[a-zA-Z\u00C0-\u00FF\-/ âêîôûŵŷ]{1,500}$", ErrorMessage = "Only letters allowed")]
    public required string Description { get; set; }
    public DateTime DateCreated { get; set; }
}

