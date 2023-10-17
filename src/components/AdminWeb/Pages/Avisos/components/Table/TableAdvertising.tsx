import { Advertising } from '../../../../types/customTypes';
import TableRow from './TableRow';
import Modal from '../../../../components/Modal';
import FormAdvertising from '../Modal/FormAdvertising';
import * as React from 'react';

interface TableAdvertisingProps {
  advertisings: Advertising[];
  setAdvertisingsJSON: () => void;
}

// Componente para la tabla completa
function TableAdvertising({
  advertisings,
  setAdvertisingsJSON,
}: TableAdvertisingProps) {
  const [editRow, setEditRow] = React.useState<Advertising>();
  const [isEditing, setIsEditing] = React.useState(false);

  const handleRowClick = (advertising: Advertising) => {
    setEditRow(advertising);
    setIsEditing(true);
  };

  const handleModalClose = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <table className="table-auto border-collapse overflow-hidden rounded-tl-[20px] rounded-tr-[20px] ml-10 mt-10 font-[500]">
        <thead className="bg-[#484848] text-[#BABABA] text-[1.5em] text-left">
          <tr>
            <th className="px-4 py-4 w-0"></th>
            <th className="px-4 py-4 w-[24.563em]">Nombre</th>
            <th className="px-4 py-4 w-[10.625em]">Sector/es</th>
            <th className="px-4 py-4 w-[16.688em]">Días</th>
            <th className="px-4 py-4 w-[16.688em]">Programación</th>
            <th className="px-4 py-4 w-[11.125em]">Estado</th>
          </tr>
        </thead>
        <tbody className="text-[20px] font[500]">
          {advertisings.map((data, index) => (
            <TableRow
              key={data.id}
              advertising={data}
              index={index}
              onRowClick={handleRowClick}
            />
          ))}
        </tbody>
      </table>
      {/* MODAL PARA EDITAR */}
      <Modal
        isOpen={isEditing}
        closeModal={handleModalClose}
        component={
          <FormAdvertising
            setAdvertisingsJSON={setAdvertisingsJSON}
            closeModal={handleModalClose}
            isCreate={false}
            advertising={editRow}
          />
        }
      />
    </div>
  );
}

export default TableAdvertising;
