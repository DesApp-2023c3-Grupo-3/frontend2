function RowsCourse(props: any) {
    let esCambioDeFila = true

    return(
        <tbody>
            {
                props.items.map((data : any, index : number) => {
                    esCambioDeFila = !esCambioDeFila

                    return (
                        <tr key={index} className={`text-[#343434] ${esCambioDeFila ? 'bg-white' : 'bg-[#D9D9D9]'} py-1`}>
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