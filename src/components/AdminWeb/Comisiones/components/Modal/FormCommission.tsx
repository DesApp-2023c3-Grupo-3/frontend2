import Button from '../../../components/Buttons/Button';
import DatePickerDays from './DatePickerDays';
import Sectores from './Sectores';
import React, { useState } from 'react';
import { Commission } from '../../../types/customTypes';
import { abbreviateSectorName } from '../../../utils/AbbreviateSectorName';

interface FormCommissionProps {
  commissionsJSON: Commission[];
  setCommissionsJSON: React.Dispatch<React.SetStateAction<Commission[]>>;
  closeModal: () => void;
}

function FormCommission({
  commissionsJSON,
  setCommissionsJSON,
  closeModal,
}: FormCommissionProps) {
  const [hasDocument, setHasDocument] = useState<boolean>(false); // Cambiamos el nombre del estado a "hasDocument"
  const [tableData, setTableData] = useState<Commission[]>([]);
  const newCommission = () => {
    setHasDocument(!hasDocument); // Cambiamos el nombre del estado a "hasDocument"
    
    const startDay = startDate.toLocaleDateString();
    const endtDay = endDate.toLocaleDateString();
    const sectores = selectedSector
      .map((sector) => abbreviateSectorName(sector.name))
      .join(', ');
    
      const newCommission = {
      id: commissionsJSON.length + 1,
      name: "C1",
      user: {
        id: commissionsJSON.length + 1,
        name: "Juan",
        dni: "1234",
        password: "contra",
        role: {
          id: commissionsJSON.length + 1,
          name: "Gestión Estudiantil",
        },
      },
      sector: {
        id: commissionsJSON.length + 1,
        name: sectores,
        topic: "Comision",
      },
      schedule: {
        id: commissionsJSON.length + 1,
        startDate: startDay,
        endDate: endtDay,
        startHour: "12:00",
        endHour:"14:00",
        scheduleDays: "Lu-Mi-Vi",
      },
      subject: {
        id: commissionsJSON.length + 1,
        name: "Matematica 1",
      },
      classroom: {
        id: commissionsJSON.length + 1,
        name: "Lab 1",
      }
    };
    setCommissionsJSON([...commissionsJSON, newCommission]);
  }

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleStartDateChange = (newStartDate: Date) => {
    setStartDate(newStartDate);
    console.log(newStartDate.toLocaleDateString());
  };
  const handleEndDateChange = (newEndDate: Date) => {
    setEndDate(newEndDate);
  };

  interface Sector {
    id: number;
    name: string;
  }

  const [selectedSector, setSelectedSector] = useState<Sector[]>([]);
  const handleSelectedSectorChange = (newSelectedSector: Sector[]) => {
    setSelectedSector(newSelectedSector);
    console.log('Sectores', selectedSector);
  };

 

  const toggleTable = () => {
    setHasDocument(!hasDocument);
    if (hasDocument) {
      setTableData([]); // Limpiar los datos de la tabla al ocultarla
    } else {
      // Cargar los datos de commissionsJSON en la tablaData al mostrar la tabla
      setTableData(commissionsJSON);
    }
  };
  const downloadTemplate = () => {
    if (!hasDocument) {toggleTable();
    console.log('Descarga de excel')} // TODO: Agregar la descarga del excel
  };
  return (
    <div>
      <form className="mx-10">
        <div className=" flex h-[90px] justify-between items-center">
          <Sectores
            selectedSector={selectedSector}
            onSelectedSectorChange={handleSelectedSectorChange}
          />
          <div className="flex mt-[10px]">
            <DatePickerDays
              onChangeStartDate={handleStartDateChange}
              onChangeEndDate={handleEndDateChange}
            />
          </div>
        </div>
        <div className="flex justify-between rounded-[20px]">
          <div className="mr-[2em] mt-[20px] rounded-[20px]">
          <button
              type="button"
              className={`${hasDocument ? 'rounded-t-[20px]' : 'rounded-[20px]'} flex justify-center items-center bg-[#D9D9D9] w-[700px] h-[328px] ml-[110px]`}
              style={{ position: 'relative' }}
              onClick={toggleTable}
              disabled={hasDocument}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="45"
                viewBox="0 0 36 45"
                fill="none"
                onClick={toggleTable} // Agregamos un evento click para mostrar/ocultar la tabla
                style={{ cursor: 'pointer' }}
              >
                {!hasDocument ? <path
                  d="M34 12.5V40.5C34 41.0304 33.7893 41.5391 33.4142 41.9142C33.0391 42.2893 32.5304 42.5 32 42.5H4C3.46957 42.5 2.96086 42.2893 2.58579 41.9142C2.21071 41.5391 2 41.0304 2 40.5V4.5C2 3.96957 2.21071 3.46086 2.58579 3.08579C2.96086 2.71071 3.46957 2.5 4 2.5H24M34 12.5H24V2.5M34 12.5L24 2.5M18 19.5V33.5M11 26.5H25"
                  stroke="#545454"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                /> : null}
              </svg>
              {hasDocument && (
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    overflowY: 'auto', //desplazamiento vertical
                    scrollbarWidth: 'none',
                  }}
                >
                  <table className="table-auto border-collapse overflow-hidden rounded-t-[20px] font-[500]">
                    <thead style={{
                      position: 'sticky'
                    }}
                    className="bg-[#484848] text-[#BABABA] text-[1.5em] text-center">
                      <tr>
                        <th className="px-4 py-4 w-[17.292em]">Materia</th>
                        <th className="px-4 py-4 w-[17.292em]">Comisión</th>
                        <th className="px-4 py-4 w-[17.292em]">Aula</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((commission) => (
                        <tr key={commission.id} className='border-solid border-y-2 border-neutral-400 text-center'>
                          <td>{commission.subject.name}</td>
                          <td>{commission.name}</td>
                          <td>{commission.classroom.name}</td>
                          {/* Agrega más celdas según los datos que quieras mostrar */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-between mx-6 mt-6">
        <Button onClick={downloadTemplate} active={hasDocument} type={2} label={'DESCARGAR TEMPLATE'} />
        <Button onClick={hasDocument ? closeModal : () => {}} active={hasDocument} type={1} label={'GUARDAR'} />
      </div>
    </div>
  );
}

export default FormCommission;