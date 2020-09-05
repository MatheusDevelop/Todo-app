using API_Todo.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Todo.Interfaces
{
    interface ITasks
    {
        public void Create(Tasks t);
        public List<Tasks> ReadAll();
        public void Update(int id,Tasks newTarefa);
        public void Delete(int id);

       

    }
}
