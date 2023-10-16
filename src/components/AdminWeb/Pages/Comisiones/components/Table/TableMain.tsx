import React, { useEffect, useState } from 'react';
import { Pagination, ThemeProvider } from '@mui/material';
import theme from '../../../../config/createTheme';
import SearchBar from './SearchBar';
import TableCommisions from './TableCommissions';
import { Commission } from '../../../../types/customTypes';

function TableMain({ commissionsJSON }: { commissionsJSON: Commission[] }) {
  const [itemsPerPage, setItemsPerPage] = useState(7);

  useEffect(() => {
    const adjustItemsPerPage = () => {
      const windowHeight = window.innerHeight;
      const rowHeight = 130;
      const maxRowsToShow = Math.floor(windowHeight / rowHeight);
      setItemsPerPage(maxRowsToShow);
    };

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

  const filteredData = commissionsJSON.filter((commision) =>
    commision.subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    commision.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    commision.classroom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="tableMain">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <TableCommisions commissions={currentData} />
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

export default TableMain;
