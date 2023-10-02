import DatePickerDays from './DatePickerDays';
import Sectores from './Sectores';
import ImageTextVideo from './ImageTextVideo/ImageTextVideo';
import DayPicker from './DayPicker';
import ButtonSave from '../ButtonSave';
import PickerTime from './PickerTime';
import React, { useState } from 'react';
import { Advertising } from '../../../types/customTypes';
import { abbreviateSectorName } from '../../../utils/AbbreviateSectorName';
import Swal from 'sweetalert2';

interface FormAdvertisingProps {
  advertisingsJSON: Advertising[]; // Un array de días seleccionados
  setAdvertisingsJSON: React.Dispatch<React.SetStateAction<Advertising[]>>; // Función para actualizar los días seleccionados
  onCloseClick: () => void;
}

function FormAdvertising({
  advertisingsJSON,
  setAdvertisingsJSON,
  onCloseClick,
}: FormAdvertisingProps) {
  const handleSendAdvertisingClick = () => {
    const locale = 'es-AR';
    //fecha
    const startDay = startDate.toLocaleDateString();
    const endDay = endDate.toLocaleDateString();

    //hora
    let localeStartHour: null | String = null,
      localeStartMinutes: null | String = null;
    if (startHour !== null) {
      [localeStartHour, localeStartMinutes] = startHour
        .toLocaleTimeString(locale)
        .split(':');
    }
    let localeEndHour: null | String = null,
      localeEndMinutes: null | String = null;
    if (endHour !== null) {
      [localeEndHour, localeEndMinutes] = endHour
        .toLocaleTimeString(locale)
        .split(':');
    }

    //dias
    const days = selectedDays.map((dia) => dia.slice(0, 2)).join('-');

    //sectores
    const sectores = selectedSector
      .map((sector) => abbreviateSectorName(sector.name))
      .join(', ');

    //Alerts
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    if (
      !advertisingName ||
      selectedSector.length === 0 ||
      selectedDays.length === 0 ||
      advertisingName.length === 0 ||
      startDate === null ||
      endDate === null ||
      startHour === null ||
      endHour === null
    ) {
      Swal.fire({
        title: 'Hay campos sin completar. ¿Deseas continuar creando el aviso?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
        confirmButtonColor: '#2C9CBF',
      }).then((result) => {
        if (result.isConfirmed) {
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
              endDate: endDay,
              startHour: `${localeStartHour}:${localeStartMinutes}`,
              endHour: `${localeEndHour}:${localeEndMinutes}`,
              scheduleDays: days,
            },
          };

          // Envía el objeto a la tabla o realiza las acciones necesarias aquí

          setAdvertisingsJSON([...advertisingsJSON, newAdvertising]);
          onCloseClick();
          Toast.fire({
            icon: 'success',
            title: 'Se ha creado el aviso',
          });
        }
      });
    }
  };

  //Nombre del aviso
  const [advertisingName, setAdvertisingName] = useState('');

  //Hora del aviso
  const [startHour, setStartHour] = useState<Date | null>(null);
  const [endHour, setEndHour] = useState<Date | null>(null);

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
        <div className=" flex h-[90px] justify-between items-center relative">
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
        <ButtonSave onClick={handleSendAdvertisingClick} />
      </div>
    </div>
  );
}

export default FormAdvertising;
