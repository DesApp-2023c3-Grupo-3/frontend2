import { Dayjs } from 'dayjs';
import DatePickerDays from '../../../../../components/DatePickerDays';
import PickerTime from '../../../../../components/PickerTime';
import DayPicker, { Days } from '../DayPicker';
import ErrorMessage from '../../../../../components/ErrorMessage';
import {
  validateDates,
  validateTwoDates,
  validationDate,
} from '../../../../../utils/validationDate';

interface CalenderMobileProp {
  setStartDate: (newStartDate: Dayjs | null) => void;
  setEndDate: (newEndDate: Dayjs | null) => void;
  startDate: null | Dayjs;
  endDate: null | Dayjs;
  setStartHour: (a: Dayjs | null) => void;
  setEndHour: (a: Dayjs | null) => void;
  startHour: null | Dayjs;
  endHour: null | Dayjs;
  setSelectedDays: (a: any) => void;
  selectedDays: Days[];
  isCreate: boolean;
  emptyFields: any;
}

export function CalenderMobile({
  emptyFields,
  setStartDate,
  setEndDate,
  startDate,
  endDate,
  isCreate,
  setStartHour,
  setEndHour,
  startHour,
  endHour,
  setSelectedDays,
  selectedDays,
}: CalenderMobileProp) {
  const invalidDate = () => {
    return validationDate(startDate, endDate);
  };

  const invalidHours = () => {
    return validationDate(startHour, endHour);
  };

  const invalidselectedDays = () => {
    return selectedDays.length === 0;
  };

  return (
    <>
      <div className="ml-[20px] text-[24px] font-bold mt-[-50px] dark:text-white">
        <h1>FECHA Y HORA</h1>
      </div>
      <div>
        <DatePickerDays
          hasError={
            (emptyFields.date && invalidDate()) ||
            (validateTwoDates(startDate, endDate) && !emptyFields.date)
          }
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
          selectedDateInit={startDate}
          selectedDateFinal={endDate}
          isCreate={isCreate}
        />
        {ErrorMessage(
          (validateDates(startDate, endDate) && 'Fecha inválida') ||
            (validateTwoDates(startDate, endDate) &&
              'La fecha de inicio es más grande que la fecha final') ||
            'Falta completar las fechas.',
          (emptyFields.date && invalidDate()) ||
            (validateTwoDates(startDate, endDate) && !emptyFields.date),
        )}
      </div>
      <div className="z-[1050]">
        <PickerTime
          hasError={emptyFields.hour && invalidHours()}
          onChangeStartHour={setStartHour}
          onChangeEndHour={setEndHour}
          selectedHourInit={startHour}
          selectedHourFinal={endHour}
        />
        {ErrorMessage(
          'Falta completar los horarios',
          emptyFields.hour && invalidHours(),
        )}
      </div>
      <div className="absolute bottom-[6.7rem] left-0 right-0">
        <DayPicker
          onSelectedDaysChange={setSelectedDays}
          selectedDays={selectedDays}
          hasError={emptyFields.selectedDays && invalidselectedDays()}
        />
        <div className="absolute">
          {ErrorMessage(
            'Falta elegir los días.',
            emptyFields.selectedDays && invalidselectedDays(),
          )}
        </div>
      </div>
    </>
  );
}
