import { useSocketStore } from "../../store/socketStore"

function RowsCourse() {
    const courseMessages = useSocketStore(state => state.getCoursesMessages())
    let esCambioDeFila = true

    return(
        <tbody>
            {
                courseMessages.map((data, index) => {
                    esCambioDeFila = !esCambioDeFila

                    return (
                        <tr key={index} className={`${esCambioDeFila ? 'bg-white' : 'bg-slate-400'}`}>
                            <td>
                                {data.subject}
                            </td>
                            <td>
                                {data.title}
                            </td>
                            <td>
                                {data.classroom}
                            </td>
                            <td>
                                {data.schedule}
                            </td>
                        </tr>
                        )
                    }
                )
            }
        </tbody>
    )
}

export default RowsCourse