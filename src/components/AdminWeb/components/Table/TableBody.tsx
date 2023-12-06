import TableRow from './TableRow';

interface TableBodyProps {
  dataJSON: any[];
  columns: Map<string, (data: any) => void>;
  onRowClick?: (data: any) => void;
  onRowPress?: (data: any) => void;
  rowRef: React.MutableRefObject<HTMLTableRowElement | null>;
}

function TableBody({
  dataJSON,
  columns,
  onRowClick,
  rowRef,
  onRowPress,
}: TableBodyProps) {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isMiniMobile = window.matchMedia('(max-width: 320px)').matches;

  return (
    <table
      className={`table-auto border-collapse overflow-hidden mt-10 font-[500] w-full ${
        !isMobile && 'rounded-tl-[20px] rounded-tr-[20px]'
      }`}
    >
      <thead className="bg-[#484848] text-[#BABABA] text-[1.5em] text-left">
        <tr>
          {Array.from(columns.keys()).map((columnName) => {
            return (
              <th
                key={columnName}
                className={`
                  ${
                    columnName === ''
                      ? 'w-[3em] flex justify-center'
                      : 'w-[auto] min-w-[180px] px-4 py-4 '
                  } 
                  ${columnName === 'Estado' ? 'w-[16px]' : ''}
                  ${
                    isMobile
                      ? 'min-w-[33vw] max-w-[33vw] w-[33vw] text-[20px]'
                      : ''
                  }
                  ${isMiniMobile ? ' text-[18px]' : ''}
                  ${columnName === 'Rol' && isMobile && 'flex justify-center'}
                  ${
                    columnName === 'Estado' && isMobile && 'flex justify-center'
                  }

                  `}
              >
                {columnName}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={`"text-[20px] font[500]" ${isMobile && 'text-[16px]'}`}>
        {dataJSON.map((data, index) => (
          <TableRow
            key={data.id}
            item={data}
            index={index}
            columns={columns}
            onRowClick={onRowClick}
            onRowPress={onRowPress}
            rowRef={rowRef}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TableBody;
