using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2_ASPNET_Core_APP.Models;

namespace Angular2_ASPNET_Core_APP.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
           
            
            return View();
        }

       
    }
}
