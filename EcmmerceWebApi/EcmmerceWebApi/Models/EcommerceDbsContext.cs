using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EcmmerceWebApi.Models
{
    public partial class EcommerceDbsContext : DbContext
    {
        public EcommerceDbsContext()
        {
        }

        public EcommerceDbsContext(DbContextOptions<EcommerceDbsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblCategory> TblCategories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TblCategory>(entity =>
            {
                entity.ToTable("tblCategory");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.CreateOn).HasColumnType("date");

                entity.Property(e => e.ParentId).HasColumnName("ParentID");

                entity.Property(e => e.UpdatedOn).HasColumnType("date");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
