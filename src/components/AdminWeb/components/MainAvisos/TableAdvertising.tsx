import React, { useEffect, useState } from 'react';
import { abbreviateSectorName } from '../../utils/AbbreviateSectorName';
import { Pagination } from '@mui/material';

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

type TableAdvertisingProps = {
  advertisingsJSON: Advertising[];
};

function TableAdvertising({ advertisingsJSON }: TableAdvertisingProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const [totalItems, setTotalItems] = useState(advertisingsJSON.length);

  useEffect(() => {
    setTotalItems(advertisingsJSON.length);
  }, [advertisingsJSON]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = advertisingsJSON.slice(startIndex, endIndex);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="">
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
          <tbody className="text-[20px]">
            {currentData.map(
              (
                advertising,
                index, //Mapeo el JSON
              ) => (
                <tr
                  key={advertising.id}
                  className={index % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#DFDFDF]'}
                >
                  <td id="User" className="px-4 py-2">
                    {' '}
                    <div className="flex justify-center items-center text-white text-[32px] font-[500] bg-[#2C9CBF] rounded-full w-[60px] h-[60px] text-center">
                      {advertising.user.role.name.charAt(0)}
                    </div>
                  </td>
                  <td id="Nombre" className="px-4 py-2">
                    {advertising.name}
                  </td>
                  <td id="Sector" className="px-4 py-2">
                    {abbreviateSectorName(advertising.sector.name)}
                  </td>{' '}
                  {/* Cambiar si son varios sectores */}
                  <td className="px-4 py-2">
                    {advertising.schedule.scheduleDays}
                  </td>
                  <td className="px-4 py-2">
                    {advertising.schedule.startHour +
                      '-' +
                      advertising.schedule.endHour}
                  </td>
                  <td className="px-4 py-2">{'activo'}</td>{' '}
                  {/* Falta hacer esto. */}
                </tr>
              ),
            )}
          </tbody>
        </table>
        <Pagination
          className="flex justify-center"
          count={Math.ceil(totalItems / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </>
  );
}

export default TableAdvertising;
