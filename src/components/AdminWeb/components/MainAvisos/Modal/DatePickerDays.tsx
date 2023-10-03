import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

dayjs.locale('es');

interface DatePickerDaysProps {
  onChangeStartDate: (newStartDate: Date) => void;
  onChangeEndDate: (newEndDate: Date) => void;
}

function DatePickerDays({
  onChangeStartDate,
  onChangeEndDate,
}: DatePickerDaysProps) {
  const [selectedDateInit, setSelectedDateInit] = React.useState<Date | null>(
    null,
  );
  const [selectedDateFinal, setSelectedDateFinal] = React.useState<Date | null>(
    null,
  );

  const handleStartDateChange = (newStartDate: string) => {
    const newDate = dayjs(newStartDate).toDate();

    setSelectedDateInit(newDate);
    onChangeStartDate(newDate);
    console.log('Fecha de inicio: ', newDate);
  };

  const handleEndDateChange = (newEndDate: string) => {
    const newDateEnd = dayjs(newEndDate).toDate();

    setSelectedDateFinal(newDateEnd);
    onChangeEndDate(newDateEnd);
    console.log('Fecha de Final: ', newDateEnd);
  };

  return (
    <div className="flex items-center mb-3 justify-center ">
      <div className="m-3 mt-1 ">
        <DemoContainer components={['Inicio', 'Final']}>
          <DatePicker
            className=" w-[100px] text-b"
            value={selectedDateInit}
            onChange={(newDate: Date | null) => {
              if (newDate !== null) {
                handleStartDateChange(dayjs(newDate).format());
              }
            }}
            label="Inicio"
          />
          <DatePicker
            className=" w-[100px] text-b"
            value={selectedDateFinal}
            onChange={(newDate: Date | null) => {
              if (newDate !== null) {
                handleEndDateChange(dayjs(newDate).format());
              }
            }}
            label="Final"
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default DatePickerDays;
