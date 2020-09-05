using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Todo.Domains;
using API_Todo.Repositories;
using Microsoft.AspNetCore.Mvc;


namespace API_Todo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        TasksRepository repo = new TasksRepository();
            
            
            

        // GET
        [HttpGet]
        public List<Tasks>Get()
        {
            return repo.ReadAll();
        }

        // GET api/Tasks/{id}
        //Search
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/task
        [HttpPost]
        public void Post(Tasks t)
        {
            repo.Create(t);
        }

        // PUT api/<TasksController>/5
        [HttpPut("{id}")]
        public void Put(int id, Tasks t)
        {
            repo.Update(id, t);
        }

        // DELETE api/<TasksController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            repo.Delete(id);
        }
    }
}
