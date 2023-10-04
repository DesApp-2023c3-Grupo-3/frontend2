import React, { useEffect, useState } from 'react';

export default function Table({headerRow}: {headerRow: string[]}) {
    const [rowList, setRowList] = useState([])

    

    return (
        <div className='flex w-100'>
            <ul className='flex w-100 justify-between px-6 py-2'>
                {
                    headerRow.map((title, index) => {
                        return <li key={index}>{title}</li>
                    })
                }
            </ul>
        </div>
    )
}