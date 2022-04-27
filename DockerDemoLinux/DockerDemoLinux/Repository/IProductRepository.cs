using DockerDemoLinux.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DockerDemoLinux.Repository
{
   public interface IProductRepository
    {
        IEnumerable<Product> GetProducts();

        Product GetProductByID(int product);

        void InsertProduct(Product product);
        void DeleteProduct(int productId);
        void UpdateProduct(Product product);
        void Save();
    }
}
