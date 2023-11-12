import TableRow from './TableRow';
import * as React from 'react';

interface TableBodyProps {
  dataJSON: any[];
  columns: Map<string, (data: any) => void>;
  onRowClick?: (data: any) => void;
  rowRef: React.MutableRefObject<HTMLTableRowElement | null>;
}

function TableBody({ dataJSON, columns, onRowClick, rowRef }: TableBodyProps) {
  const order = ['active', 'today', 'pending', 'deprecated'];

  return (
    <div>
      <table className="table-auto border-collapse overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-10 font-[500]">
        <thead className="bg-[#484848] text-[#BABABA] text-[1.5em] text-left">
          <tr>
            {Array.from(columns.keys()).map((columnName) => {
              return (
                <th
                  key={columnName}
                  className={`px-6 py-4 
                  ${
                    columnName === ''
                      ? 'w-[3em] flex justify-center'
                      : 'w-[24em] px-4 py-4 '
                  } 
                  ${columnName === 'Estado' ? 'w-[16px] ' : ''}
                  `}
                >
                  {columnName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-[20px] font[500]">
          {dataJSON
            .sort((a, b) => order.indexOf(a.status) - order.indexOf(b.status))
            .map((data, index) => (
              <TableRow
                key={data.id}
                item={data}
                index={index}
                columns={columns}
                onRowClick={onRowClick}
                rowRef={rowRef}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableBody;
