import RowsCourse from "./RowsCourse";

function TableCourse() {

  return (
        <main className="p-4">
            <div className="relative overflow-x-auto rounded-lg">
                <table className="w-full bg-[#74B235] text-center text-lg">
                    <thead className="text-white uppercase">
                        <tr>
                            <th className="font-normal w-1/4" scope="col">
                                Materia
                            </th>
                            <th className="font-normal w-1/4" scope="col">
                                Comision
                            </th>
                            <th className="font-normal w-1/4" scope="col">
                                Aula
                            </th>
                            <th className="font-normal w-1/4" scope="col">
                                Horario
                            </th>
                        </tr>
                    </thead>
                    <RowsCourse />
                </table>
            </div>
        </main>
  );
}


export default TableCourse