function RowsCourse(props: any) {
    let esCambioDeFila = true

    return(
        <tbody>
            {
                props.items.map((data : any, index: number) => {
                    esCambioDeFila = !esCambioDeFila
                    return (
                        <tr key={index} className={`whitespace-nowrap text-[#343434] ${esCambioDeFila ? 'bg-white' : 'bg-[#D9D9D9]'} xl:h-[2.6rem] 2xl:h-[4rem]`}>
                            <td className="">
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