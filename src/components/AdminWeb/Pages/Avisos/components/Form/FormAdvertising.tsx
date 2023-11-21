import DatePickerDays from '../../../../components/DatePickerDays';
import Sectores from '../../../../components/Sectores';
import ImageTextVideo from './ImageTextVideo/ImageTextVideo';
import DayPicker from './DayPicker';
import PickerTime from '../../../../components/PickerTime';
import Swal from 'sweetalert2';
import './form.sass';
import dayjs from 'dayjs';
import { Advertising } from '../../../../types/customTypes';
import ErrorMessage from '../../../../components/ErrorMessage';
import Button from '../../../../components/Buttons/Button';
import * as React from 'react';
import { advertisingsAPI } from '../../../../../../services/advertisings';
import { convertDaysToNumbers } from '../../../../utils/ConvertDaysToCode';
import { validationDate } from '../../../../utils/validationDate';
import { useAdvertisingData } from '../../../../hooks/useAdvertisingData';
import { InputName } from './InputNameAdvertising';
import Loader from '../../../../components/Loader';

export function messageError(message: string) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
    confirmButtonColor: '#2C9CBF',
  });
}

//Alerts
export const Toast = Swal.mixin({
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
  const {
    advertisingName,
    startHour,
    endHour,
    startDate,
    endDate,
    selectedDays,
    selectedSector,
    text,
    image,
    video,
    type,
    setAdvertisingName,
    setStartHour,
    setEndHour,
    setStartDate,
    setEndDate,
    setSelectedDays,
    setSelectedSector,
    setTextPayload,
    setImagePayload,
    setVideoPayload,
    setType,
  } = useAdvertisingData(advertising);

  const [loading, setLoading] = React.useState(false);
  const [loadingDelete, setLoadingDelete] = React.useState(false);

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
      setLoadingDelete(true);
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
              setLoadingDelete(false);
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
    } else if (endDate !== null && startDate !== null && endDate < startDate) {
      messageError('La fecha final no debe ser anterior a la de inicio.');
    } else if (payload === '') {
      messageError('Falta agregarle al aviso un texto, video o imagen.');
    } else if (type === 2 && !payload) {
      messageError('URL YouTube incorrecta.');
    } else {
      if (isCreate) {
        setLoading(true);
        advertisingsAPI
          .create(newAdvertising)
          .then((r) => {
            setAdvertisingsJSON();
            closeModal();
            Toast.fire({
              icon: 'success',
              title: 'Se ha creado el aviso',
            });
            setLoading(false);
          })
          .catch((error) => console.error(error));
      } else {
        if (advertising) {
          setLoading(true);
          advertisingsAPI
            .edit(advertising.id, newAdvertising)
            .then((r) => {
              setAdvertisingsJSON();
              closeModal();
              Toast.fire({
                icon: 'success',
                title: 'Se ha editado el aviso',
              });
              setLoading(false);
            })
            .catch((error) => console.error(error));
        }
      }
    }
  };

  return (
    <div>
      <form className="mx-10">
        <div className=" flex my-5 justify-between items-center">
          <div className="flex-col w-[365px] h-[50px]">
            <InputName
              emptyFields={emptyFields}
              invalidName={invalidName}
              advertisingName={advertisingName}
              setAdvertisingName={setAdvertisingName}
            />
            {ErrorMessage(
              '*Falta completar el nombre del aviso.',
              invalidName() && emptyFields.advertisingName,
            )}
          </div>
          <div className="flex-col w-[365px] h-[50px]">
            <Sectores
              selectedSector={selectedSector}
              onSelectedSectorChange={setSelectedSector}
              hasError={emptyFields.selectedSector && invalidSectors()}
              canChooseMany={true}
            />
            <div className="">
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
          <div className="pr-[1em] pt-[20px]">
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
          {!isCreate && (
            <div className="w-[300px]">
              {loadingDelete ? (
                <Loader
                  type={2}
                  color={'error'}
                  className="w-[200px] translate-y-3 "
                />
              ) : (
                <Button
                  onClick={handleDeleteAdvertisingClick}
                  active={true}
                  type={3}
                  label="ELIMINAR"
                />
              )}
            </div>
          )}
        </div>
        <div className="w-[300px] flex justify-center">
          {loading ? (
            <Loader type={2} className="w-[200px] translate-y-3" />
          ) : (
            <Button
              onClick={handleSendAdvertisingClick}
              active={true}
              type={1}
              label="GUARDAR"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FormAdvertising;
