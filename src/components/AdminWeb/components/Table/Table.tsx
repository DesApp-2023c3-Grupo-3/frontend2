import { Pagination } from '@nextui-org/react';
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import TableBody from './TableBody';

interface TableProps {
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

function Table({
  dataJSON,
  columns,
  searchableColumns = [],
  onRowClick,
  onRowPress,
  placeholder,
  totalItems = 0,
  currentPage,
  setCurrentPage,
}: TableProps) {
  const [filteredData, setFilteredData] = useState(dataJSON);
  const rowRef = useRef<HTMLTableRowElement>(null);

  //Ajustar la cantidad de filas a mostrar en función del tamaño de la ventana.

  /*const adjustItemsPerPage = () => {
    const row = rowRef.current;

    if (row) {
      const windowHeight = window.innerHeight - 350;
      const maxRowsToShow = Math.floor(
        windowHeight / row.getBoundingClientRect().height,
      );
      if (maxRowsToShow <= 0) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(maxRowsToShow);
      }
    }
  };

  useEffect(() => {
    adjustItemsPerPage();

    window.addEventListener('resize', adjustItemsPerPage);

    return () => {
      window.removeEventListener('resize', adjustItemsPerPage);
    };
  }, []);*/

  const [searchTerm, setSearchTerm] = useState('');

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
    updateFilteredData(event.target.value);
  };

  const updateFilteredData: any = (searchTerm: string) => {
    let filteredResult: any[] = [];

    const columnsToMatch =
      searchableColumns.length > 0
        ? searchableColumns
        : Array.from(columns.keys());

    columnsToMatch.forEach((columnName: string) => {
      const output = dataJSON.filter((data) => {
        const columnValue = (columns.get(columnName)?.call(data, data) || '-')
          .toString()
          .toLowerCase();

        return columnValue.includes(searchTerm.toLowerCase());
      });

      filteredResult = Array.from(new Set<any>([...filteredResult, ...output]));
    });

    setFilteredData(filteredResult);
  };

  return (
    <div className='flex flex-col grow'>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        placeholder={placeholder}
      />
      <TableBody
        dataJSON={filteredData}
        columns={columns}
        onRowClick={onRowClick}
        rowRef={rowRef}
        onRowPress={onRowPress}
      />
      <Pagination
        color="primary"
        className="bg-white scrollbar-none mt-4 flex justify-center w-full mt-auto"
        showControls
        total={Math.ceil(totalItems / 10)}
        page={currentPage}
        onChange={handlePageChange}
      ></Pagination>
    </div>
  );
}

export default Table;
