using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Todo.Domains
{
    public class Tasks
    {
        public int id_tarefa { get; set; }
        public string tarefa { get; set; }
        public string dataUtc { get; set; }
        public int Checked { get; set; }
    }
}
