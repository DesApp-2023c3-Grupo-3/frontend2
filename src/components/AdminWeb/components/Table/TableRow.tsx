import * as React from 'react';

interface TableRowProps {
  item: any;
  index: number;
  columns: Map<string, (data: any) => void>;
  onRowClick?: (data: any) => void;
  onRowPress?: (data: any) => void;
  rowRef: React.MutableRefObject<HTMLTableRowElement | null>;
}

function TableRow({
  item,
  index,
  columns,
  onRowClick,
  rowRef,
  onRowPress,
}: TableRowProps) {
  const handleRowClick = () => {
    if (onRowClick) {
      onRowClick(item);
    }
  };

  const [startTime, setStartTime] = React.useState(0);

  const handleMouseDown = () => {
    setStartTime(Date.now());
  };

  const handleMouseUp = () => {
    const endTime = Date.now();
    const timeHold = endTime - startTime;
    if (timeHold >= 800) {
      if (onRowPress) {
        onRowPress(item);
      }
    }
  };

  return (
    <tr
      ref={index === 0 ? rowRef : null}
      onClick={handleRowClick}
      key={index}
      className={`row ${onRowClick ? 'hover:bg-[#c4c4c4]' : ''}
            ${index % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'}
            relative
        `}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {Array.from(columns.keys()).map((columnName) => {
        return (
          <td
            key={columnName}
            id={columnName}
            className="py-2 px-6 text-[20px]
            'max-w-[220px] relative"
          >
            <div
              className={`
            overflow-hidden text-ellipsis w-[100%]
            `}
            >
              {columns.get(columnName)?.call(item, item) || 'aaa'}
            </div>
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
