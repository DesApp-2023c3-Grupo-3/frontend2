import Filas from "./Filas";

function Tabla() {
  return (
        <main className="p-4">
            <table className="w-full">
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