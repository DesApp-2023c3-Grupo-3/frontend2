import RowsCourse from "./RowsCourse";

function TableCourse() {
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
                <RowsCourse />
            </table>
        </main>
  );
}


export default TableCourse