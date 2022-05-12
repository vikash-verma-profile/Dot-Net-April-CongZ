﻿using EventHubWebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventHubWebApi.Interfaces
{
    public interface IJWTManagerRepository
    {
        Tokens Authenticate(Users users);
    }
}
