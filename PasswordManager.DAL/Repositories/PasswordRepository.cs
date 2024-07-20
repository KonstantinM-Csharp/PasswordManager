
using Microsoft.EntityFrameworkCore;
using PasswordManager.Core.Interfaces;
using PasswordManager.DAL.Entities;

namespace PasswordManager.DAL.Repositories;

public class PasswordRepository
    : IRepository<PasswordEntity>
{
    private readonly PasswordManagerDbContextInMemory _context;
    public PasswordRepository(PasswordManagerDbContextInMemory context)
    {
         _context = context;
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
                             .ToListAsync();
    }

    public async Task<PasswordEntity?> GetByIdAsync(int id)
    {
        return await _context.Passwords
                             .AsNoTracking()
                             .FirstOrDefaultAsync(p => p.Id == id);
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
