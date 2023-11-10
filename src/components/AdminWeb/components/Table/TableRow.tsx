interface TableRowProps {
  item: any;
  index: number;
  columns: Map<string, (data: any) => void>;
  onRowClick?: (data: any) => void;
  rowRef: React.MutableRefObject<HTMLTableRowElement | null>;
}

function TableRow({ item, index, columns, onRowClick, rowRef }: TableRowProps) {
  const handleRowClick = () => {
    if (onRowClick) {
      onRowClick(item);
    }
  };

  return (
    <tr
      ref={index === 0 ? rowRef : null}
      onClick={handleRowClick}
      key={index}
      className={`row ${onRowClick ? 'hover:bg-[#c4c4c4]' : ''}
            ${index % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'}
        `}
    >
      {Array.from(columns.keys()).map((columnName) => {
        return (
          <td key={columnName} id={columnName} className="py-2 px-6">
            {columns.get(columnName)?.call(item, item) || '-'}
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
