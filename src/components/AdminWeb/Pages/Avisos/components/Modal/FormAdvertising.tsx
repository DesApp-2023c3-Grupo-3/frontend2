import DatePickerDays from '../../../../components/DatePickerDays';
import Sectores, { Sector } from '../../../../components/Sectores';
import ImageTextVideo from './ImageTextVideo/ImageTextVideo';
import DayPicker, { Days } from './DayPicker';
import PickerTime from './PickerTime';
import Swal from 'sweetalert2';
import './form.sass';
import dayjs, { Dayjs } from 'dayjs';
import { Advertising } from '../../../../types/customTypes';
import ErrorMessage from '../../../../components/ErrorMessage';
import Button from '../../../../components/Buttons/Button';
import * as React from 'react';
import { advertisingsAPI } from '../../../../../../services/advertisings';
import {
  convertCodesToDays,
  convertDaysToNumbers,
} from '../../../../utils/ConvertDaysToCode';
import { usePayload } from '../../../../hooks/usePayload';
import { validationDate } from '../../../../utils/validationDate';
import { convertCodesToSectors } from '../../../../utils/AbbreviateSectorName';

function messageError(message: string) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
    confirmButtonColor: '#2C9CBF',
  });
}

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

interface FormAdvertisingProps {
  setAdvertisingsJSON: () => void;
  closeModal: () => void;
  isCreate: boolean;
  advertising?: Advertising;
}

function FormAdvertising({
  setAdvertisingsJSON,
  closeModal,
  isCreate,
  advertising,
}: FormAdvertisingProps) {
  const [advertisingName, setAdvertisingName] = React.useState(
    advertising ? advertising.name : '',
  );

  const [startHour, setStartHour] = React.useState<Dayjs | null>(
    advertising
      ? dayjs(advertising?.advertisingSchedules[0].schedule.startHour)
      : null,
  );
  const [endHour, setEndHour] = React.useState<Dayjs | null>(
    advertising
      ? dayjs(advertising?.advertisingSchedules[0].schedule.endHour)
      : null,
  );

  const [startDate, setStartDate] = React.useState<Dayjs | null>(
    advertising
      ? dayjs(advertising?.advertisingSchedules[0].schedule.startDate)
      : null,
  );
  const [endDate, setEndDate] = React.useState<Dayjs | null>(
    advertising
      ? dayjs(advertising?.advertisingSchedules[0].schedule.endDate)
      : null,
  );

  const codeDays = advertising?.advertisingSchedules.map(
    (s) => s.schedule.dayCode,
  );

  const dayslist = codeDays ? convertCodesToDays(codeDays) : [];

  const [selectedDays, setSelectedDays] = React.useState<Days[]>(
    advertising ? dayslist : [],
  );

  const sectorIds = advertising?.advertisingSectors.map((s) => s.sector.id);

  const sectors = sectorIds ? convertCodesToSectors(sectorIds) : [];

  const [selectedSector, setSelectedSector] = React.useState<Sector[]>(
    advertising ? sectors : [],
  );

  const {
    text,
    image,
    video,
    type,
    setTextPayload,
    setImagePayload,
    setVideoPayload,
    setType,
  } = usePayload(advertising);

  const invalidName = () => {
    return advertisingName === '';
  };

  const invalidSectors = () => {
    return selectedSector.length === 0;
  };

  const invalidselectedDays = () => {
    return selectedDays.length === 0;
  };

  const invalidDate = () => {
    return validationDate(startDate, endDate);
  };

  const invalidHours = () => {
    return validationDate(startHour, endHour);
  };

  let payload = '';

  const invalidadType = () => {
    return payload === '';
  };

  switch (type) {
    case 1:
      payload = image;
      break;
    case 2:
      payload = video;
      break;
    case 3:
      payload = text;
      break;
    default:
      break;
  }

  const [emptyFields, setEmptyFields] = React.useState({
    advertisingName: false,
    selectedSector: false,
    selectedDays: false,
    date: false,
    hour: false,
    type: false,
  });

  const handleDeleteAdvertisingClick = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No se podrá recuperar el aviso.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar.',
    }).then((result) => {
      if (result.isConfirmed) {
        if (advertising) {
          advertisingsAPI
            .delete(advertising.id)
            .then((r) => {
              Toast.fire({
                icon: 'success',
                title: 'Se ha eliminado el aviso',
              });
              setAdvertisingsJSON();
              closeModal();
            })
            .catch((error) => console.error(error));
        }
      }
    });
  };

  const handleSendAdvertisingClick = () => {
    const daysCode = convertDaysToNumbers(selectedDays);

    const hstart = dayjs(startHour).format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
    const hend = dayjs(endHour).format('YYYY-MM-DD HH:mm:ss.SSS ZZ');

    const DatesHours = {
      startDate: startDate,
      endDate: endDate,
      startHour: hstart,
      endHour: hend,
    };
    const schedules = daysCode.map((dayCode) => ({
      ...DatesHours,
      dayCode,
    }));

    const sectores = selectedSector.map((sectors) => {
      const { name, ...rest } = sectors;
      return rest;
    });

    const newAdvertising = {
      name: advertisingName,
      payload: payload,
      advertisingType: {
        id: type,
      },
      user: {
        id: 1,
      },
      sectors: sectores,
      schedules: schedules,
    };

    const emptyFieldsUpdate = {
      advertisingName: advertisingName === '',
      selectedSector: selectedSector.length === 0,
      selectedDays: selectedDays.length === 0,
      date: validationDate(startDate, endDate),
      hour: validationDate(startHour, endHour),
      type: payload === '',
    };
    setEmptyFields(emptyFieldsUpdate);

    if (Object.values(emptyFieldsUpdate).filter((value) => value).length > 1) {
      //TODO: Faltaría agregar una lista de los campos que estan incompletos y ponerlo en el mensaje de error.
      messageError('Hay campos incompletos.');
    } else if (!advertisingName) {
      messageError('Falta completar el nombre del aviso.');
    } else if (selectedSector.length === 0) {
      messageError('Falta completar los sectores.');
    } else if (validationDate(startDate, endDate)) {
      messageError('Falta completar las fechas del aviso.');
    } else if (selectedDays.length === 0) {
      messageError('Falta seleccionar los días de la semana.');
    } else if (validationDate(startHour, endHour)) {
      messageError('Falta completar el horario de los avisos.');
    } else if (endDate !== null && startDate !== null && endDate <= startDate) {
      messageError('La fecha final no debe ser anterior a la de inicio.');
    } else if (payload === '') {
      messageError('Falta agregarle al aviso un texto, video o imagen.');
    } else if (type === 2 && !payload) {
      messageError('URL YouTube incorrecta.');
    } else {
      if (isCreate) {
        advertisingsAPI
          .create(newAdvertising)
          .then((r) => {
            setAdvertisingsJSON();
            closeModal();
            Toast.fire({
              icon: 'success',
              title: 'Se ha creado el aviso',
            });
          })
          .catch((error) => console.error(error));
      } else {
        if (advertising) {
          advertisingsAPI
            .edit(advertising.id, newAdvertising)
            .then((r) => {
              setAdvertisingsJSON();
              closeModal();
              Toast.fire({
                icon: 'success',
                title: 'Se ha editado el aviso',
              });
            })
            .catch((error) => console.error(error));
        }
      }
    }
  };

  return (
    <div>
      <form className="mx-10">
        <div className=" flex h-[90px] justify-between items-center">
          <div className="flex-col justify-center relative">
            <input
              id="advertisingName"
              type="text"
              placeholder="Nombre del aviso..."
              className={`text-[20px] font-[400] tracking-[-0.4px] rounded-[30px] bg-[#D9D9D9] flex w-[365px] h-[50px] px-[40px] py-[12px] items-center ${
                emptyFields.advertisingName && invalidName()
                  ? 'invalid-field'
                  : ''
              }`}
              value={advertisingName}
              onChange={(e) => {
                setAdvertisingName(e.target.value);
              }}
              defaultValue={advertisingName}
              autoComplete="off"
            ></input>
            {ErrorMessage(
              '*Falta completar el nombre del aviso.',
              invalidName() && emptyFields.advertisingName,
            )}
          </div>
          <div className="flex-col justify-center">
            <Sectores
              selectedSector={selectedSector}
              onSelectedSectorChange={setSelectedSector}
              campos={emptyFields}
            />
            <div>
              {ErrorMessage(
                '*Falta seleccionar los sectores.',
                emptyFields.selectedSector && invalidSectors(),
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between h-[348px]">
          <div className="flex-col justify-center items-center m-5 ">
            <div className="flex-col justify-center">
              <DatePickerDays
                onChangeStartDate={setStartDate}
                onChangeEndDate={setEndDate}
                selectedDateInit={startDate}
                selectedDateFinal={endDate}
                isCreate={isCreate}
              />
              {ErrorMessage(
                '*Falta completar las fechas.',
                emptyFields.date && invalidDate(),
              )}
            </div>
            <div className="flex-col justify-center pt-10">
              <DayPicker
                onSelectedDaysChange={setSelectedDays}
                selectedDays={selectedDays}
              />
              {ErrorMessage(
                '*Falta elegir los días.',
                emptyFields.selectedDays && invalidselectedDays(),
              )}
            </div>
            <div className="flex-col justify-center pt-10">
              <PickerTime
                onChangeStartHour={setStartHour}
                onChangeEndHour={setEndHour}
                selectedHourInit={startHour}
                selectedHourFinal={endHour}
              />
              {ErrorMessage(
                '*Falta completar los horarios',
                emptyFields.hour && invalidHours(),
              )}
            </div>
          </div>
          <div className="pr-[1em] pt-[20px] z-[999]">
            <ImageTextVideo
              text={text}
              image={image}
              video={video}
              type={type}
              setTextPayload={setTextPayload}
              setImagePayload={setImagePayload}
              setVideoPayload={setVideoPayload}
              setType={setType}
            />
            {ErrorMessage(
              '*Falta completar el tipo del aviso',
              emptyFields.type && invalidadType(),
            )}
          </div>
        </div>
      </form>
      <div className="flex justify-between mt-[2em] mx-[4.5em]">
        <div>
          {!isCreate ? (
            <Button
              onClick={handleDeleteAdvertisingClick}
              active={true}
              type={3}
              label="ELIMINAR"
            />
          ) : (
            ''
          )}
        </div>
        <div className="">
          <Button
            onClick={handleSendAdvertisingClick}
            active={true}
            type={1}
            label="GUARDAR"
          />
        </div>
      </div>
    </div>
  );
}

export default FormAdvertising;
