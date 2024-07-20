﻿
using Microsoft.EntityFrameworkCore;
using PasswordManager.Core.Interfaces;
using PasswordManager.Core.Entities;

namespace PasswordManager.DAL.Repositories;

public class PasswordRepository
    : IRepository<PasswordEntity>
{
    private readonly PasswordManagerDbContextInMemory _context;
    public PasswordRepository(PasswordManagerDbContextInMemory context)
    {
         _context = context;
        var passwordEntities = new List<PasswordEntity>
        {
            new PasswordEntity
            {
                Id = 1,
                Name = "example.com",
                Password = "Password1",
                CreationTime = DateTime.Now.AddDays(-10),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Id = 2,
                Name = "user@example.com",
                Password = "Password2",
                CreationTime = DateTime.Now.AddDays(-20),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Id = 3,
                Name = "anotherwebsite.com",
                Password = "Password3",
                CreationTime = DateTime.Now.AddDays(-30),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Id = 4,
                Name = "anotheruser@example.com",
                Password = "Password4",
                CreationTime = DateTime.Now.AddDays(-40),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Id = 5,
                Name = "yetanotherwebsite.com",
                Password = "Password5",
                CreationTime = DateTime.Now.AddDays(-50),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Id = 6,
                Name = "example2.com",
                Password = "Password6",
                CreationTime = DateTime.Now.AddDays(-5),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Id = 7,
                Name = "user2@example.com",
                Password = "Password7",
                CreationTime = DateTime.Now.AddDays(-15),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Id = 8,
                Name = "anotherwebsite2.com",
                Password = "Password8",
                CreationTime = DateTime.Now.AddDays(-25),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Id = 9,
                Name = "anotheruser2@example.com",
                Password = "Password9",
                CreationTime = DateTime.Now.AddDays(-35),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Id = 10,
                Name = "yetanotherwebsite2.com",
                Password = "Password10",
                CreationTime = DateTime.Now.AddDays(-45),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Id = 11,
                Name = "example3.com",
                Password = "Password11",
                CreationTime = DateTime.Now.AddDays(-12),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Id = 12,
                Name = "user3@example.com",
                Password = "Password12",
                CreationTime = DateTime.Now.AddDays(-22),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Id = 13,
                Name = "anotherwebsite3.com",
                Password = "Password13",
                CreationTime = DateTime.Now.AddDays(-32),
                TypePassword = "Site"
            },
            new PasswordEntity
            {
                Id = 14,
                Name = "anotheruser3@example.com",
                Password = "Password14",
                CreationTime = DateTime.Now.AddDays(-42),
                TypePassword = "Email"
            },
            new PasswordEntity
            {
                Id = 15,
                Name = "yetanotherwebsite3.com",
                Password = "Password15",
                CreationTime = DateTime.Now.AddDays(-52),
                TypePassword = "Site"
            }
          };
    }

    public async Task AddAsync(PasswordEntity entity)
    {
        await _context.Passwords.AddAsync(entity);
    }

    public void Delete(PasswordEntity entity)
    {
         _context.Remove(entity);
    }

    public async Task<IEnumerable<PasswordEntity>> GetAllAsync()
    {
        return await _context.Passwords
                             .AsNoTracking()
                             .OrderByDescending(p=>p.CreationTime)
                             .ToListAsync();
    }

    public async Task<PasswordEntity?> GetByIdAsync(int id)
    {
        return await _context.Passwords
                             .AsNoTracking()
                             .FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<IEnumerable<PasswordEntity>> GetByNameAsync(string name)
    {
        return await _context.Passwords
                             .AsNoTracking()
                             .Where(p => p.Name.ToLower().Contains(name.ToLower()))
                             .ToListAsync();
    }

    public async Task SaveAsync()
    {
        await _context.SaveChangesAsync();
    }

    public void Update(PasswordEntity entity)
    {
        _context.Update(entity);
    }
}
