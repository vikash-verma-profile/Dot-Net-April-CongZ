﻿using EcmmerceWebApi.Interfaces;
using EcmmerceWebApi.ViewModels;
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
    public class UsersController : ControllerBase
    {
        private readonly IJWTManagerRepository iJWTManager;

        public UsersController(IJWTManagerRepository jWTManager)
        {
            iJWTManager = jWTManager;
        }

        [HttpGet]
        public List<string> Get()
        {
            var users = new List<string> { "Amit","Vikash Verma","Raj Kumar"};
            return users;
        }
        [AllowAnonymous]
        [HttpPost]
        [Route("authenticate")]
        public IActionResult Authenticate(Users userdata)
        {
            var token = iJWTManager.Authenticate(userdata);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }
    }
}
