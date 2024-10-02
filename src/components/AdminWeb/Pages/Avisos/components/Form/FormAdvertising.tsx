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
import { useUser } from '../../../../hooks/useUser';

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

  const canSubmit =
    advertisingName &&
    startHour?.isValid() &&
    endHour?.isValid() &&
    startDate?.isValid() &&
    endDate?.isValid() &&
    selectedDays.length > 0 &&
    selectedSector.length > 0 &&
    ((!!text && text !== '<p><br></p>') || !!image || !!video);

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
    })
      .then((result) => {
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
      })
      .finally(() => setLoadingDelete(false));
  };

  const { iduser } = useUser();

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
        id: iduser,
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

    if (canSubmit) {
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
    <div className="p-5 flex flex-col gap-3">
      <form className="flex flex-col justify-center gap-3">
        <div className="flex gap-5 justify-center items-center w-full">
          <div className="w-[400px]">
            <InputName
              emptyFields={emptyFields}
              invalidName={invalidName}
              advertisingName={advertisingName}
              setAdvertisingName={setAdvertisingName}
            />
            {ErrorMessage(
              'Falta completar el nombre del aviso.',
              invalidName() && emptyFields.advertisingName,
            )}
          </div>
          <div className="w-[400px]">
            <Sectores
              selectedSector={selectedSector}
              onSelectedSectorChange={setSelectedSector}
              hasError={emptyFields.selectedSector && invalidSectors()}
              canChooseMany={true}
            />
            <div className="">
              {ErrorMessage(
                'Falta seleccionar los sectores.',
                emptyFields.selectedSector && invalidSectors(),
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="flex flex-col items-center gap-7 w-2/4">
            <div className="flex flex-col w-full">
              <DatePickerDays
                onChangeStartDate={setStartDate}
                onChangeEndDate={setEndDate}
                selectedDateInit={startDate}
                selectedDateFinal={endDate}
                isCreate={isCreate}
                hasError={emptyFields.date && invalidDate()}
              />
              {ErrorMessage(
                'Falta completar las fechas.',
                emptyFields.date && invalidDate(),
              )}
            </div>
            <div className="flex flex-col w-full">
              <DayPicker
                onSelectedDaysChange={setSelectedDays}
                selectedDays={selectedDays}
                hasError={emptyFields.selectedDays && invalidselectedDays()}
              />
              {ErrorMessage(
                'Falta elegir los días.',
                emptyFields.selectedDays && invalidselectedDays(),
              )}
            </div>
            <div className="flex flex-col w-full">
              <PickerTime
                onChangeStartHour={setStartHour}
                onChangeEndHour={setEndHour}
                selectedHourInit={startHour}
                selectedHourFinal={endHour}
                hasError={emptyFields.hour && invalidHours()}
              />
              {ErrorMessage(
                'Falta completar los horarios',
                emptyFields.hour && invalidHours(),
              )}
            </div>
          </div>
          <div className="flex flex-col">
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
              'Falta completar el tipo del aviso',
              (emptyFields.type && invalidadType()) || text === '<p><br></p>',
            )}
          </div>
        </div>
      </form>
      <div className="flex justify-center gap-10">
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
              active={canSubmit}
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
