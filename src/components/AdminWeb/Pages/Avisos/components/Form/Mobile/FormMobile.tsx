import { Advertising } from '../../../../../types/customTypes';
import { NewAdvertising } from './NewAdvertising';
import React from 'react';
import { validationDate } from '../../../../../utils/validationDate';
import { useAdvertisingData } from '../../../../../hooks/useAdvertisingData';
import Button from '../../../../../components/Buttons/Button';
import { CalenderMobile } from './CalenderMobile';
import { Dayjs } from 'dayjs';

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
      <div className={`h-[calc(100vh-100px)]`}>
        {currentStep === 1 ? (
          <NewAdvertising
            emptyFields={emptyFields}
            invalidName={invalidName}
            advertisingName={advertisingName}
            setAdvertisingName={setAdvertisingName}
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
            invalidSectors={invalidSectors}
            type={type}
            setType={setType}
          />
        ) : (
          ''
        )}
        {currentStep === 2 ? (
          <CalenderMobile
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
        {currentStep === 3 ? <div>paso 3</div> : ''}
      </div>
      <div className="flex items-center justify-center">
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
        {currentStep === 3 ? (
          <Button
            onClick={() => ''}
            active={true}
            type={1}
            label="GUARDAR"
          ></Button>
        ) : (
          ''
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
