import * as React from 'react';
import { Pagination, ThemeProvider } from '@mui/material';
import SearchBar from './SearchBar';
import TableAdvertising from './TableAdvertising';
import { Advertising } from '../../../../types/customTypes';
import theme from '../../../../config/createTheme';

interface TableMainProps {
  advertisingsJSON: Advertising[];
  setAdvertisingsJSON: () => void;
}

function TableMain({
  advertisingsJSON = [],
  setAdvertisingsJSON,
}: TableMainProps) {
  //filas por pagina
  const [itemsPerPage, setItemsPerPage] = React.useState(7);

  React.useEffect(() => {
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

  //barra de busqueda y paginacion
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');

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

  const filteredData = advertisingsJSON.filter((advertising) =>
    advertising.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <TableAdvertising
        advertisings={currentData}
        setAdvertisingsJSON={setAdvertisingsJSON}
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

export default TableMain;
