function TableRow({
  item,
  index,
  columns,
}: {
  item: any;
  index: number;
  columns: Map<string, (data: any) => void>;
}) {
  return (
    <tr
      key={index}
      className={item % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'}
    >
      {Array.from(columns.keys()).map((columnName) => {
        return (
          <td key={columnName} id={columnName} className="px-4 py-2">
            {columns.get(columnName)?.call(item, item) || '-'}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
