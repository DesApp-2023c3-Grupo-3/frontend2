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
        className="flex justify-center mr-10 border-2 hover:border-[3px] border-[#484848] rounded-[55px] py-[10px] w-[390px] cursor-text "
      >
        <div className="flex items-center">
          <svg
            width="29"
            height="31"
            viewBox="0 0 29 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6833 27.125L16.0708 18.9875C15.4667 19.5042 14.7719 19.9132 13.9865 20.2146C13.201 20.516 12.3653 20.6667 11.4792 20.6667C9.28403 20.6667 7.42642 19.8538 5.90633 18.228C4.38625 16.6022 3.62581 14.6165 3.625 12.2708C3.625 9.92431 4.38544 7.93858 5.90633 6.31367C7.42722 4.68875 9.28483 3.87586 11.4792 3.875C13.6743 3.875 15.5319 4.68789 17.052 6.31367C18.5721 7.93944 19.3325 9.92517 19.3333 12.2708C19.3333 13.2181 19.1924 14.1115 18.9104 14.951C18.6285 15.7906 18.2458 16.5333 17.7625 17.1792L25.375 25.3167L23.6833 27.125ZM11.4792 18.0833C12.9896 18.0833 14.2736 17.518 15.3313 16.3874C16.389 15.2567 16.9175 13.8846 16.9167 12.2708C16.9167 10.6562 16.3878 9.28364 15.3301 8.153C14.2724 7.02236 12.9888 6.45747 11.4792 6.45833C9.96875 6.45833 8.68469 7.02365 7.627 8.15429C6.56931 9.28493 6.04086 10.6571 6.04167 12.2708C6.04167 13.8854 6.57051 15.258 7.62821 16.3887C8.6859 17.5193 9.96956 18.0842 11.4792 18.0833Z"
              fill="#484848"
            />
          </svg>
        </div>
        <input
          className="w-[85%] pl-2 h-full outline-none text-[20px]"
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
