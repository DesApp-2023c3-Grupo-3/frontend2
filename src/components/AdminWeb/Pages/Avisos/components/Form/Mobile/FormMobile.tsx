import { Advertising } from '../../../../../types/customTypes';
import { NewAdvertising } from './NewAdvertising';
import React from 'react';
import { validationDate } from '../../../../../utils/validationDate';
import { useAdvertisingData } from '../../../../../hooks/useAdvertisingData';

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

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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

  return (
    <div className="">
      <div className="">
        {currentStep === 1 ? (
          <NewAdvertising
            emptyFields={emptyFields}
            invalidName={invalidName}
            advertisingName={advertisingName}
            setAdvertisingName={setAdvertisingName}
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
            invalidSectors={invalidSectors}
          />
        ) : (
          ''
        )}
        {currentStep === 2 ? <div>paso 2</div> : ''}
        {currentStep === 3 ? <div>paso 3</div> : ''}
      </div>
      <div className="flex items-end justify-end">
        {currentStep > 1 && (
          <button onClick={handlePreviousStep}>Anterior</button>
        )}
        {currentStep < 3 && <button onClick={handleNextStep}>Siguiente</button>}
        {currentStep === 3 && <button onClick={() => ''}>GUARDAR</button>}
      </div>
    </div>
  );
}
