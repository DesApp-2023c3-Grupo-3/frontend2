import React, { useState } from 'react';
import { abbreviateSectorName } from '../../utils/AbbreviateSectorName';
import { Pagination, ThemeProvider } from '@mui/material';
import theme from '../../config/createTheme';

type Advertising = {
  id: number;
  name: string;
  advertisingType: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    name: string;
    dni: string;
    password: string;
    role: {
      id: number;
      name: string;
    };
  };
  sector: {
    id: number;
    name: string;
    topic: string;
  };
  schedule: {
    id: number;
    startDate: string;
    endDate: string;
    startHour: string;
    endHour: string;
    scheduleDays: string;
  };
};

// Componente para la barra de búsqueda
function SearchBar({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex justify-end h-[50px]">
      <div
        id="input"
        className="flex justify-center mr-10 border-2 hover:border-[3px] border-[#484848] rounded-[55px] py-[10px] w-[390px] cursor-text relative"
      >
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          className="w-[85%] h-full pl-2 outline-none"
          type="text"
          placeholder="Buscas avisos"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}

// Componente para mostrar una fila
function TableRow({
  advertising,
  index,
}: {
  advertising: Advertising;
  index: number;
}) {
  return (
    <tr
      key={advertising.id}
      className={index % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'}
    >
      <td
        id="User"
        className="px-4 py-2 m-2 flex justify-center items-center text-white text-[32px] font-[500] bg-[#2C9CBF] rounded-full w-[60px] h-[60px] text-center"
      >
        {advertising.user.role.name.charAt(0)}
      </td>
      <td id="Nombre" className="px-4 py-2">
        {advertising.name}
      </td>
      <td id="Sector" className="px-4 py-2">
        {abbreviateSectorName(advertising.sector.name)}
      </td>
      {/* Cambiar si son varios sectores */}
      <td className="px-4 py-2">{advertising.schedule.scheduleDays}</td>
      <td className="px-4 py-2">
        {advertising.schedule.startHour + '-' + advertising.schedule.endHour}
      </td>
      <td className="px-4 py-2">{'activo'}</td> {/* Falta hacer esto. */}
    </tr>
  );
}

// Componente para la tabla completa
function Table({ advertisings }: { advertisings: Advertising[] }) {
  return (
    <table className="table-auto border-collapse overflow-hidden rounded-tl-[20px] rounded-tr-[20px] m-10">
      <thead className="bg-[#484848] text-[#BABABA] text-[24px] text-left">
        <tr>
          <th className="px-4 py-4"></th>
          <th className="px-4 py-4 w-[393px]">Nombre</th>
          <th className="px-4 py-4 w-[170px]">Sector/es</th>
          <th className="px-4 py-4 w-[267px]">Días</th>
          <th className="px-4 py-4 w-[267px]">Programación</th>
          <th className="px-4 py-4 w-[178px]">Estado</th>
        </tr>
      </thead>
      <tbody>
        {advertisings.map((data, index) => (
          <TableRow key={data.id} advertising={data} index={index} />
        ))}
      </tbody>
    </table>
  );
}

// Componente principal TableAdvertising
function TableAdvertising({
  advertisingsJSON,
}: {
  advertisingsJSON: Advertising[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
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

  const filteredData = advertisingsJSON.filter((advertising) =>
    advertising.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="mt-[-70px]">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Table advertisings={currentData} />
      <ThemeProvider theme={theme}>
        <Pagination
          className="flex justify-center bg-white"
          count={Math.ceil(filteredData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
}

export default TableAdvertising;
