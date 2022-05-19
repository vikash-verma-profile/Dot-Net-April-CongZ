using DemoOnCloud.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoOnCloud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleController : ControllerBase
    {
        sampleDBContext _sampleDBContext;
        public SampleController(sampleDBContext sampleDBContext)
        {
            _sampleDBContext = sampleDBContext;
        }
        [HttpGet]
        public IEnumerable<TblSample> Get()
        {
           return  _sampleDBContext.TblSamples.ToList();
        }
    }
}
