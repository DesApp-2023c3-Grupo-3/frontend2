import "./css/Tabla.css"
import Filas from "./Filas";

function Tabla() {
  return (
        <main className="cartelera">
            <table className="tabla-cartelera">
                <thead>
                    <tr>
                        <th scope="col">
                            Materia
                        </th>
                        <th scope="col">
                            Comision
                        </th>
                        <th scope="col">
                            Aula
                        </th>
                        <th scope="col">
                            Horario
                        </th>
                    </tr>
                </thead>
                <Filas />
            </table>
        </main>
  );
}


export default Tabla