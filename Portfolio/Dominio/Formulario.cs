using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Formulario
    {
        public int Id { get; set; }
        public string Asunto {  get; set; }

        public DateTime Fecha { get; set; } 

        public string Mensaje { get; set; }
        
    }
}
