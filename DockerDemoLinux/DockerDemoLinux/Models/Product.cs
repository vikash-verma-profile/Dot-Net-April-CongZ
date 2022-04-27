using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DockerDemoLinux.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Desciption { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
    }
}
