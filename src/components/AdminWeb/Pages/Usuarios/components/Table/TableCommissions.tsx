import TableRow from './TableRow';

function TableCommissions({ rowArray, columns }: { rowArray: any[], columns: Map<string, (data: any) => void> }) {
  return (
    <table className="table-auto border-collapse overflow-hidden rounded-tl-[20px] rounded-tr-[20px] mt-10 font-[500]">
      <thead className="bg-[#484848] text-[#BABABA] text-[1.5em] text-left">
        <tr>
        {
          Array.from(columns.keys()).map(columnName => {
            return <th key={columnName} className="px-4 py-4 w-[17.937em]">{columnName}</th>
          })
        }
        </tr>
      </thead>
      <tbody className="text-[20px] font[500]">
      {
        rowArray.map((data, index) => (
          <TableRow key={data.id} item={data} index={index} columns={columns} />
        ))
      }
      </tbody>
    </table>
  );
}

export default TableCommissions;
