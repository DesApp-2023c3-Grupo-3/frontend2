
function Tabla() {
  return (
    <section className="p-4">
        <table className="w-full text-center text-white">
            <thead class="bg-[#74B235] text-xl">
                <tr>
                    <th scope="col" className="font-normal">
                        MATERIA
                    </th>
                    <th scope="col" className="font-normal">
                        COMISION
                    </th>
                    <th scope="col" className="font-normal">
                        AULA
                    </th>
                    <th scope="col" className="font-normal">
                        HORARIO
                    </th>
                </tr>
            </thead>
            <tbody className="text-black">
                <tr className="bg-[#D9D9D9] text-xl border-b">
                    <th className="px-2 py-1 font-normal">
                        Matematica I
                    </th>
                    <td className="px-2 py-1">
                        Mat-1
                    </td>
                    <td className="px-2 py-1">
                        203
                    </td>
                    <td className="px-2 py-1">
                        13:00 - 16:00
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
  );
}


export default Tabla