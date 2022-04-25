using EcmmerceWebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcmmerceWebApi.Interfaces
{
    public interface IJWTManagerRepository
    {
        Tokens Authenticate(Users users);
    }
}
