using System.ComponentModel.DataAnnotations;
namespace Api.Data;
public class User
{
    public Guid Id { get; set; }

    [RegularExpression(@"^[a-zA-Z\u00C0-\u00FF\-/ âêîôûŵŷ]{1,40}$", ErrorMessage = "Only letters allowed")]
    public required string Name { get; set; }
    public required string Email { get; set; }

    [RegularExpression(@"^[a-zA-Z\u00C0-\u00FF\-/ âêîôûŵŷ]{1,500}$", ErrorMessage = "Only letters allowed")]
    public required string About { get; set; }
}

