import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';

interface TablaNextUiProps {
  dataJSON: any[];
  columns: Map<string, (data: any) => void>;
  searchableColumns?: string[];
  onRowClick?: (data: any) => void;
  onRowPress?: (data: any) => void;
  placeholder?: string;
  totalItems?: number;
  currentPage?: number;
  setCurrentPage?: any;
}

export default function TablaNextUi({
  dataJSON,
  columns,
  searchableColumns = [],
  onRowClick,
  onRowPress,
  placeholder,
  totalItems = 0,
  currentPage,
  setCurrentPage,
}: TablaNextUiProps) {
  const columnsArray = Array.from(columns, ([key, handler]) => ({
    key,
    handler,
  }));

  return (
    <Table>
      <TableHeader columns={columnsArray}>
        {(column) => <TableColumn key={column.key}>{column.key}</TableColumn>}
      </TableHeader>
      <TableBody>
        {dataJSON.map((data, index) => (
          <TableRow key={index}>
            {columnsArray.map((columnName) => {
              return (
                <TableCell key={columnName.key}>
                  {columns.get(columnName.key)?.call(data, data) || '-'}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
