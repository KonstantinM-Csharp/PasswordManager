
namespace PasswordManager.DAL.Entities;

public class PasswordEntity
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Password { get; set; } = string.Empty;

    public DateTime CreationTime { get; set; }

    public string TypePassword { get; set; } = string.Empty;
}
