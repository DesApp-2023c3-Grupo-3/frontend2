import { Dayjs } from 'dayjs';
import DatePickerDays from '../../../../../components/DatePickerDays';
import PickerTime from '../../../../../components/PickerTime';
import DayPicker, { Days } from '../DayPicker';
import ErrorMessage from '../../../../../components/ErrorMessage';
import { validationDate } from '../../../../../utils/validationDate';

interface CalenderMobileProp {
  setStartDate: (newStartDate: Dayjs) => void;
  setEndDate: (newEndDate: Dayjs) => void;
  startDate: null | Dayjs;
  endDate: null | Dayjs;
  setStartHour: (a: Dayjs) => void;
  setEndHour: (a: Dayjs) => void;
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
          hasError={emptyFields.date && invalidDate()}
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
          selectedDateInit={startDate}
          selectedDateFinal={endDate}
          isCreate={isCreate}
        />
        {ErrorMessage(
          'Falta completar las fechas.',
          emptyFields.date && invalidDate(),
        )}
      </div>
      <div>
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
      <div className="md:my-[3em] my-[1.1em]">
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
    </>
  );
}
