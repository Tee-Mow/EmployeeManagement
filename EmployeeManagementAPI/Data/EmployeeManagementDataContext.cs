using Microsoft.EntityFrameworkCore;
using EmployeeManagementAPI.Models;

namespace EmployeeManagementAPI.Data
{
    public class EmployeeManagementDataContext : DbContext
    {
    public EmployeeManagementDataContext(DbContextOptions<EmployeeManagementDataContext> options) : base(options)
    {
    }
    public DbSet<Person> People {get; set;}
    public DbSet<Employee> Employees {get; set;}

            protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>().ToTable("Person");
            modelBuilder.Entity<Employee>().ToTable("Employee");
        }

    }
}