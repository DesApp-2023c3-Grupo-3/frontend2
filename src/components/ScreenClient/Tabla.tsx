import Filas from "./Filas";

function Tabla() {
  return (
        <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-center text-black">
                <thead className="text-xl text-white uppercase bg-[#74B235]">
                    <tr>
                        <th scope="col" className="px-16 font-normal">
                            Materia
                        </th>
                        <th scope="col" className="px-16 font-normal">
                            Comision
                        </th>
                        <th scope="col" className="px-16 font-normal">
                            Aula
                        </th>
                        <th scope="col" className="px-16 font-normal">
                            Horario
                        </th>
                    </tr>
                </thead>
                <Filas />
            </table>
        </div>
  );
}


export default Tabla