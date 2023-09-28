import DatePickerDays from './DatePickerDays';
import Sectores from './Sectores';
import ImageTextVideo from './ImageTextVideo/ImageTextVideo';
import DayPicker from './DayPicker';
import ButtonSave from '../ButtonSave';
import PickerTime from './PickerTime';
import React, { useState } from 'react';
import { Advertising } from '../../../types/customTypes';
import { abbreviateSectorName } from '../../../utils/AbbreviateSectorName';

interface FormAdvertisingProps {
  advertisingsJSON: Advertising[]; // Un array de días seleccionados
  setAdvertisingsJSON: React.Dispatch<React.SetStateAction<Advertising[]>>; // Función para actualizar los días seleccionados
}

function FormAdvertising({
  advertisingsJSON,
  setAdvertisingsJSON,
}: FormAdvertisingProps) {
  //ejemplo
  const newAdvertising = () => {
    const locale = 'es-AR';
    //fecha
    const startDay = startDate.toLocaleDateString();
    const endtDay = endDate.toLocaleDateString();

    //hora
    const [localeStartHour, localeStartMinutes] = startHour
      .toLocaleTimeString(locale)
      .split(':');
    const [localeEndHour, localeEndMinutes] = endHour
      .toLocaleTimeString(locale)
      .split(':');

    //dias
    const days = selectedDays.map((dia) => dia.slice(0, 2)).join('-');

    //sectores
    const sectores = selectedSector
      .map((sector) => abbreviateSectorName(sector.name))
      .join(', ');

    //Prueba de ejemplo
    const newAdvertising = {
      id: advertisingsJSON.length + 1,
      name: advertisingName,
      advertisingType: {
        id: advertisingsJSON.length + 1,
        name: advertisingName,
      },
      user: {
        id: 1,
        name: 'Juan Lopez',
        dni: '43567876',
        password: '1234',
        role: {
          id: 1,
          name: 'Gestión Estudiantil',
        },
      },
      sector: {
        id: advertisingsJSON.length + 1,
        name: sectores,
        topic: 'Materias',
      },
      schedule: {
        id: advertisingsJSON.length + 1,
        startDate: startDay,
        endDate: endtDay,
        startHour: `${localeStartHour}:${localeStartMinutes}`,
        endHour: `${localeEndHour}:${localeEndMinutes}`,
        scheduleDays: days,
      },
    };

    setAdvertisingsJSON([...advertisingsJSON, newAdvertising]);
  };

  //Nombre del aviso
  const [advertisingName, setAdvertisingName] = useState('');

  //Hora del aviso
  const [startHour, setStartHour] = useState<Date>(new Date());
  const [endHour, setEndHour] = useState<Date>(new Date());

  const handleStartHourChange = (newStartHour: Date) => {
    setStartHour(newStartHour);
  };

  const handleEndHourChange = (newEndHour: Date) => {
    setEndHour(newEndHour);
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

  //Día de la semana del aviso
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleDaysChange = (newDays: string[]) => {
    setSelectedDays(newDays);
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

  return (
    <div>
      <form className="mx-10">
        <div className=" flex h-[90px] justify-between items-center">
          <input
            id="advertisingName"
            type="text"
            placeholder="Nombre del aviso..."
            className="text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center"
            value={advertisingName}
            onChange={(e) => setAdvertisingName(e.target.value)}
          ></input>
          <Sectores
            selectedSector={selectedSector}
            onSelectedSectorChange={handleSelectedSectorChange}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex-row justify-center items-center mt-[20px]">
            <DatePickerDays
              onChangeStartDate={handleStartDateChange}
              onChangeEndDate={handleEndDateChange}
            />
            <DayPicker
              onSelectedDaysChange={handleDaysChange}
              selectedDays={selectedDays}
            />
            <PickerTime
              onChangeStartHour={handleStartHourChange}
              onChangeEndHour={handleEndHourChange}
            />
          </div>
          <div className="mr-[2em] mt-[20px]">
            <ImageTextVideo />
          </div>
        </div>
      </form>
      <div className="flex justify-end mr-[4.5em] mt-6">
        <ButtonSave onClick={newAdvertising} />
      </div>
    </div>
  );
}

export default FormAdvertising;
