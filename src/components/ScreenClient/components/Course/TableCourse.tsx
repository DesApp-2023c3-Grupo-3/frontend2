import RowsCourse from "./RowsCourse";

function TableCourse(props:any) {
    return (
            <main className="px-4 h-[70%]">
                <div className="relative overflow-x-auto rounded-lg">
                    <table className="w-full bg-[#74B235] text-center text-lg xl:text-2xl 2xl:text-4xl">
                        <thead className="text-white uppercase xl:h-[2.6rem] 2xl:h-[4rem]">
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
                        <RowsCourse items={props.selectedItem} />
                    </table>
                </div>
            </main>
    );
}


export default TableCourse