using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2_ASPNET_Core_APP.Models;



// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2_ASPNET_Core_APP.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public List<ISampleservice> Get()
        {

        var usersList = new List<ISampleservice>{
        new ISampleservice{
        ID=1,
        FirstName="Ram",
        LastName="Mindfire Solutions",
        City="Mindfire Solutions",
        },
        new ISampleservice{
        ID=1,
        FirstName="chand",
        LastName="Mindfire Solutions",
        City="Mindfire Solutions",
        },
        new ISampleservice{
        ID=1,
        FirstName="Abc",
        LastName="Abc Solutions",
        City="Mindfire Solutions",
        }};

            return usersList;

        }
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{

        //    return new string[] { "value1", "value2", "value3" };
        //}


        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
