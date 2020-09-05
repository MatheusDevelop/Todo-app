using API_Todo.Context;
using API_Todo.Domains;
using API_Todo.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace API_Todo.Repositories
{
    public class TasksRepository:ITasks
    {
        
        TodoContext con = new TodoContext();
        SqlCommand cmd = new SqlCommand();

        public void Create(Tasks t)
        {
            cmd.Connection = con.Connect();
            cmd.CommandText =
                "INSERT INTO Tasks(tarefa,dataUtc)" +
                "VALUES(@tarefa,@dataUtc)";
            cmd.Parameters.AddWithValue("@tarefa", t.tarefa);
            cmd.Parameters.AddWithValue("@dataUtc", t.dataUtc);
            cmd.ExecuteNonQuery();
            con.Desconnect();

        }

        public void Delete(int id)
        {
            cmd.Connection = con.Connect();
            cmd.CommandText =
                "DELETE FROM Tasks" +
                "WHERE id_tarefa = @id";
            cmd.Parameters.AddWithValue("@id", id);
            cmd.ExecuteNonQuery();
            con.Desconnect();
        }

        public List<Tasks> ReadAll()
        {
            cmd.Connection = con.Connect();
            cmd.CommandText =
                "SELECT * FROM Tasks";
            SqlDataReader data = cmd.ExecuteReader();

            List<Tasks> listaDeTarefas = new List<Tasks>();


            while (data.Read())
            {
                listaDeTarefas.Add(
                    new Tasks()
                    {
                        id_tarefa=Convert.ToInt32(data.GetValue(0)),
                        tarefa=Convert.ToString(data.GetValue(1)),
                        dataUtc=Convert.ToString(data.GetValue(2))
                    }
                 );
            }



            con.Desconnect();
            return listaDeTarefas;
        }

        public void Update(int id, Tasks newTarefa)
        {
            cmd.Connection = con.Connect();
            cmd.CommandText =
                "UPDATE Tasks SET " +
                "tarefa = @tarefa ," +
                "dataUtc = @dataUtc" +
                "WHERE id_tarefa = @id";
            cmd.Parameters.AddWithValue("tarefa", newTarefa.tarefa);
            cmd.Parameters.AddWithValue("dataUtc", newTarefa.dataUtc);
            cmd.Parameters.AddWithValue("id_tarefa", newTarefa.id_tarefa);
            cmd.ExecuteNonQuery();
            con.Desconnect();
        }
    }
}
