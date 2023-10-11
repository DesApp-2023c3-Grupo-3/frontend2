import DatePickerDays from './DatePickerDays';
import Sectores from './Sectores';
import ButtonDownloadTemplate from './ButtonDownloadTemplate';
import ButtonSave from './ButtonSave';
import React, { useState } from 'react';
import { Commission } from '../../types/customTypes';
import { abbreviateSectorName } from '../../utils/AbbreviateSectorName';

interface FormCommissionProps {
  commissionsJSON: Commission[]; // Un array de días seleccionados
  setCommissionsJSON: React.Dispatch<React.SetStateAction<Commission[]>>; // Función para actualizar los días seleccionados
}

function FormCommission({
  commissionsJSON,
  setCommissionsJSON,
}: FormCommissionProps) {
  //ejemplo
  const [withDocument, setWithDocument] = useState<boolean>(false);
  const newCommission = () => {
    
    setWithDocument(!withDocument);
    
    //fecha
    
    const startDay = startDate.toLocaleDateString();
    const endtDay = endDate.toLocaleDateString();


    //sectores
    const sectores = selectedSector
      .map((sector) => abbreviateSectorName(sector.name))
      .join(', ');

    //Prueba de ejemplo
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
  };


  //fechas del aviso
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleStartDateChange = (newStartDate: Date) => {
    setStartDate(newStartDate);
    console.log(newStartDate.toLocaleDateString());
  };

  const handleEndDateChange = (newEndDate: Date) => {
    setEndDate(newEndDate);
  };

  //sectores

  interface Sector {
    id: number;
    name: string;
  }

  const [selectedSector, setSelectedSector] = useState<Sector[]>([]);

  const handleSelectedSectorChange = (newSelectedSector: Sector[]) => {
    setSelectedSector(newSelectedSector);
    console.log('Sectores', selectedSector);
  };

  
  const downloadTemplate = () => {
    setWithDocument(!withDocument);
    console.log('Descarga de excel'); // TODO: Agregar la descarga del excel
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
        <div className="flex justify-between">
          <div className="mr-[2em] mt-[20px]">
            <div className="flex justify-center items-center rounded-[20px] bg-[#D9D9D9] w-[700px] h-[328px] ml-[110px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="45"
                viewBox="0 0 36 45"
                fill="none"
              >
                <path
                  d="M34 12.5V40.5C34 41.0304 33.7893 41.5391 33.4142 41.9142C33.0391 42.2893 32.5304 42.5 32 42.5H4C3.46957 42.5 2.96086 42.2893 2.58579 41.9142C2.21071 41.5391 2 41.0304 2 40.5V4.5C2 3.96957 2.21071 3.46086 2.58579 3.08579C2.96086 2.71071 3.46957 2.5 4 2.5H24M34 12.5H24V2.5M34 12.5L24 2.5M18 19.5V33.5M11 26.5H25"
                  stroke="#545454"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-between mx-6 mt-6">
        <ButtonDownloadTemplate onClick={downloadTemplate} active={withDocument} />
        <ButtonSave onClick={newCommission} active={withDocument} />
      </div>
    </div>
  );
}

export default FormCommission;
