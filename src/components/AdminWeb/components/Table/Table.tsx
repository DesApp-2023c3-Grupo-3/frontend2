import React, { useEffect, useRef, useState } from 'react';
import { Pagination, ThemeProvider } from '@mui/material';
import SearchBar from './SearchBar';
import theme from '../../config/createTheme';
import TableBody from './TableBody';

interface TableProps {
  dataJSON: any[];
  columns: Map<string, (data: any) => void>;
  onRowClick?: (data: any) => void;
  placeholder?: string;
}

function Table({ dataJSON, columns, onRowClick, placeholder }: TableProps) {
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const rowRef = useRef<HTMLTableRowElement>(null);

  const adjustItemsPerPage = () => {
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
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = dataJSON.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="">
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        placeholder={placeholder}
      />
      <TableBody
        dataJSON={currentData}
        columns={columns}
        onRowClick={onRowClick}
        rowRef={rowRef}
      />
      <ThemeProvider theme={theme}>
        <Pagination
          className="flex justify-center bg-white pt-10"
          count={Math.ceil(filteredData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
}

export default Table;
