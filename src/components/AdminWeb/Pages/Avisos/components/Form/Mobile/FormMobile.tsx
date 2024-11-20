import { Advertising } from '../../../../../types/customTypes';
import { NewAdvertising } from './NewAdvertising';
import React from 'react';
import {
  validateTwoDates,
  validationDate,
  validationHour,
} from '../../../../../utils/validationDate';
import { useAdvertisingData } from '../../../../../hooks/useAdvertisingData';
import Button from '../../../../../components/Buttons/Button';
import { CalenderMobile } from './CalenderMobile';
import dayjs from 'dayjs';
import { AdvertisingTypeMobile } from './AdvertisingTypeMobile';
import Swal from 'sweetalert2';
import { advertisingsAPI } from '../../../../../../../services/advertisings';
import { Toast } from '../FormAdvertising';
import { convertDaysToNumbers } from '../../../../../utils/ConvertDaysToCode';
import Loader from '../../../../../components/Loader';
import { useUser } from '../../../../../hooks/useUser';

interface FormMobileProps {
  setAdvertisingsJSON: () => void;
  closeModal: () => void;
  isCreate: boolean;
  advertising?: Advertising;
}

export function FormMobile({
  setAdvertisingsJSON,
  closeModal,
  isCreate,
  advertising,
}: FormMobileProps) {
  const [currentStep, setCurrentStep] = React.useState(1);

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
    return validationHour(startHour, endHour);
  };

  const invalidType = () => {
    return type === -1;
  };

  const startGreater = () => {
    return !(endDate !== null && startDate !== null && endDate < startDate);
  };

  let payload = '';

  const invalidPayload = () => {
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

  const [emptyFieldsStep1, setEmptyFieldsStep1] = React.useState({
    advertisingName: false,
    selectedSector: false,
    type: false,
  });

  const [emptyFieldsStep2, setEmptyFieldsStep2] = React.useState({
    selectedDays: false,
    date: false,
    hour: false,
  });

  const [emptyFieldsStep3, setEmptyFieldsStep3] = React.useState({
    payload: false,
  });

  const handleDeleteAdvertisingClick = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No se podrá recuperar el aviso.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si borrar',
      cancelButtonText: 'Cancelar',
    })
      .then((result) => {
        if (result.isConfirmed) {
          setLoadingDelete(true);
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

  const validateStep1 = () => {
    const update = {
      advertisingName: advertisingName === '',
      selectedSector: selectedSector.length === 0,
      type: payload === '',
    };
    setEmptyFieldsStep1(update);

    return !invalidName() && !invalidSectors() && !invalidType();
  };

  const validateStep2 = () => {
    const update = {
      selectedDays: selectedDays.length === 0,
      date: validationDate(startDate, endDate),
      hour: validationHour(startDate, endDate),
    };
    setEmptyFieldsStep2(update);

    return (
      !invalidDate() &&
      !invalidHours() &&
      !invalidselectedDays() &&
      startGreater()
    );
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      if (currentStep === 1 && validateStep1()) {
        setCurrentStep(currentStep + 1);
      }
      if (
        currentStep === 2 &&
        validateStep2() &&
        !validateTwoDates(startDate, endDate)
      ) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const { iduser } = useUser();

  const handleSendAdvertisingClick = () => {
    setEmptyFieldsStep3({ payload: payload === '' });

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
    if (!invalidPayload()) {
      setLoading(true);
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
            setLoading(false);
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
              setLoading(false);
            })
            .catch((error) => console.error(error));
        }
      }
    }
  };

  return (
    <div className="">
      <div className={`h-[calc(100vh-100px)]`}>
        {currentStep === 1 ? (
          <NewAdvertising
            emptyFields={emptyFieldsStep1}
            invalidName={invalidName}
            advertisingName={advertisingName}
            setAdvertisingName={setAdvertisingName}
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
            invalidSectors={invalidSectors}
            invalidType={invalidType}
            type={type}
            setType={setType}
          />
        ) : (
          ''
        )}
        {currentStep === 2 ? (
          <CalenderMobile
            emptyFields={emptyFieldsStep2}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
            setStartHour={setStartHour}
            setEndHour={setEndHour}
            startHour={startHour}
            endHour={endHour}
            setSelectedDays={setSelectedDays}
            selectedDays={selectedDays}
            isCreate={isCreate}
          />
        ) : (
          ''
        )}
        {currentStep === 3 ? (
          <AdvertisingTypeMobile
            advertisingName={advertisingName}
            type={type}
            text={text}
            image={image}
            video={video}
            setTextPayload={setTextPayload}
            setImagePayload={setImagePayload}
            setVideoPayload={setVideoPayload}
            emptyFields={emptyFieldsStep3}
            invalidPayload={invalidPayload}
          />
        ) : (
          ''
        )}
      </div>
      <div className="flex items-center justify-center absolute left-0 bottom-[10vw] right-0 m-auto">
        {currentStep === 1 && !isCreate && (
          <div className="w-[40px] h-[40px] mr-3">
            {loadingDelete ? (
              <Loader type={1} color={'error'} />
            ) : (
              <button
                onClick={handleDeleteAdvertisingClick}
                className="bg-[red] w-[40px] h-[40px] rounded-full flex justify-center items-center mr-3"
              >
                {trash}
              </button>
            )}
          </div>
        )}
        {currentStep > 1 && (
          <button
            className="bg-[#D9D9D9] rounded-full mr-3 h-[40px] w-[40px] flex justify-center items-center"
            onClick={handlePreviousStep}
          >
            {previous}
          </button>
        )}
        {currentStep < 3 ? (
          <div className="flex justify-center">
            <Button
              onClick={handleNextStep}
              active={true}
              type={1}
              label="SIGUIENTE"
            ></Button>
          </div>
        ) : (
          ''
        )}
        {currentStep === 3 && (
          <div className="w-[300px]">
            {loading ? (
              <Loader type={2} className="w-[60vw]" />
            ) : (
              <Button
                onClick={handleSendAdvertisingClick}
                active={true}
                type={1}
                label="GUARDAR"
              ></Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const previous = (
  <svg
    className="flex justify-center items-center"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="m15 6l-6 6l6 6"
    />
  </svg>
);

const trash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
  >
    <path
      fill="white"
      d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
    />
  </svg>
);
