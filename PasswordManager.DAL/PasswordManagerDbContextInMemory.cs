﻿using Microsoft.EntityFrameworkCore;
using PasswordManager.Core.Entities;

namespace PasswordManager.DAL;

public class PasswordManagerDbContextInMemory 
    : DbContext
{
    protected override void OnConfiguring
       (DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase(databaseName: "AuthorDb");
    }

    public DbSet<PasswordEntity> Passwords { get ; set; }
}
