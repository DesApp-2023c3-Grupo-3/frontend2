import comisiones from "./mocks/comisiones.json"

function Filas() {
    let esCambioDeFila = true

    return(
        <tbody>
            {
                comisiones.map((comision, index) => {
                    esCambioDeFila = !esCambioDeFila

                    return (
                        <tr key={index} className={`${esCambioDeFila ? 'bg-white' : 'bg-[#D9D9D9]'}`}>
                            <th scope="row" className="py-1 font-normal">
                                {comision.materia}
                            </th>
                            <td className="py-1">
                                {comision.comision}
                            </td>
                            <td className="py-1">
                                {comision.aula}
                            </td>
                            <td className="py-1">
                                {comision.horario}
                            </td>
                        </tr>
                        )
                    }
                )
            }
        </tbody>
    )
}

export default Filas