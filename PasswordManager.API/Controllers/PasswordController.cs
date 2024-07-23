using Microsoft.AspNetCore.Mvc;
using PasswordManager.Core.Entities;
using PasswordManager.Core.Interfaces;

namespace PasswordManager.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PasswordController : ControllerBase
    {
        private readonly ILogger<PasswordController> _logger;
        private readonly IRepository<PasswordEntity> _passwordRepository;

        public PasswordController(ILogger<PasswordController> logger, IRepository<PasswordEntity> passwordRepository)
        {
            _logger = logger;
            _passwordRepository = passwordRepository;
            var passwordEntities = new List<PasswordEntity>
            {
            new PasswordEntity
            {
                Name = "example.com",
                Password = "Password1",
                CreationTime = DateTime.Now.AddDays(-10),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Name = "user@example.com",
                Password = "Password2",
                CreationTime = DateTime.Now.AddDays(-20),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Name = "anotherwebsite.com",
                Password = "Password3",
                CreationTime = DateTime.Now.AddDays(-30),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Name = "anotheruser@example.com",
                Password = "Password4",
                CreationTime = DateTime.Now.AddDays(-40),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Name = "yetanotherwebsite.com",
                Password = "Password5",
                CreationTime = DateTime.Now.AddDays(-50),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Name = "example2.com",
                Password = "Password6",
                CreationTime = DateTime.Now.AddDays(-5),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Name = "user2@example.com",
                Password = "Password7",
                CreationTime = DateTime.Now.AddDays(-15),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Name = "anotherwebsite2.com",
                Password = "Password8",
                CreationTime = DateTime.Now.AddDays(-25),
                TypePassword = "Site"
            },
            new PasswordEntity  
            {
                Name = "anotheruser2@example.com",
                Password = "Password9",
                CreationTime = DateTime.Now.AddDays(-35),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Name = "yetanotherwebsite2.com",
                Password = "Password10",
                CreationTime = DateTime.Now.AddDays(-45),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Name = "example3.com",
                Password = "Password11",
                CreationTime = DateTime.Now.AddDays(-12),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Name = "user3@example.com",
                Password = "Password12",
                CreationTime = DateTime.Now.AddDays(-22),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Name = "anotherwebsite3.com",
                Password = "Password13",
                CreationTime = DateTime.Now.AddDays(-32),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Name = "anotheruser3@example.com",
                Password = "Password14",
                CreationTime = DateTime.Now.AddDays(-42),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Name = "yetanotherwebsite3.com",
                Password = "Password15",
                CreationTime = DateTime.Now.AddDays(-52),
                TypePassword = "Site"
            }
          };
            foreach (var pass in passwordEntities)
            {
                _passwordRepository.AddAsync(pass);
                _passwordRepository.SaveAsync();
            }
        }
        // Route to get a password by its ID
        [HttpGet("id/{idPassword}")]
        public async Task<PasswordEntity?> GetById(int idPassword)
        {
            return await _passwordRepository.GetByIdAsync(idPassword);
        }

        // Route to get all passwords
        [HttpGet]
        public async Task<IEnumerable<PasswordEntity>> Get()
        {
            return await _passwordRepository.GetAllAsync();
        }

        // Route to get a password by its name
        [HttpGet("name/{namePassword}")]
        public async Task<IEnumerable<PasswordEntity>> GetByName(string namePassword)
        {
            return await _passwordRepository.GetByNameAsync(namePassword);
        }

        [HttpPost()]
        public async Task<IActionResult> AddPassword(PasswordEntity passwordEntity)
        {
            passwordEntity.Id = 0;
            await _passwordRepository.AddAsync(passwordEntity);
            await _passwordRepository.SaveAsync();
            return Ok();
        }

        [HttpPatch()]
        public async Task<IActionResult> UpdatePassword(PasswordEntity passwordEntity)
        {
            var existingPassword = await _passwordRepository.GetByIdAsync(passwordEntity.Id);
            if (existingPassword == null)
            {
                return NotFound();
            }
            _passwordRepository.Update(passwordEntity);
            await _passwordRepository.SaveAsync();
            return Ok();
        }

        [HttpDelete()]
        public async Task<IActionResult> DeletePassword(int id)
        {
            var password = await _passwordRepository.GetByIdAsync(id);
            if (password == null)
            {
                return NotFound();
            }

            _passwordRepository.Delete(password);
            return NoContent();
        }
    }
}
