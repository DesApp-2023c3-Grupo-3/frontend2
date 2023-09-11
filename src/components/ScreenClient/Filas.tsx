import comisiones from "./mocks/comisiones.json"
import "./css/Tabla.css"

function Filas() {
    let esCambioDeFila = true

    return(
        <tbody>
            {
                comisiones.map((comision, index) => {
                    esCambioDeFila = !esCambioDeFila

                    return (
                        <tr key={index} className={`${esCambioDeFila ? 'bg-white' : 'bg-light-grey'}`}>
                            <td>
                                {comision.materia}
                            </td>
                            <td>
                                {comision.comision}
                            </td>
                            <td>
                                {comision.aula}
                            </td>
                            <td>
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