using EcmmerceWebApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcmmerceWebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        EcommerceDbsContext _ecommerceDbsContext;
        public CategoryController(EcommerceDbsContext ecommerceDbsContext)
        {
            _ecommerceDbsContext = ecommerceDbsContext;
        }
        [HttpGet]
        [Route("GetAllCategories")]
       public IEnumerable<TblCategory> GetAllCategories()
        {
            return _ecommerceDbsContext.TblCategories.ToList();
        }
    }
}
