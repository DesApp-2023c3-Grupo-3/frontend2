import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers';

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

  const handleStartDateChange = (newStartHour: string) => {
    console.log('handleStartHourChange newStartHour', newStartHour);
    const newDate = new Date(newStartHour);
    console.log('handleStartHourChange newDate', newDate);
    setSelectedDateInit(newDate);
    onChangeStartDate(newDate);
  };

  const handleEndDateChange = (newEndHour: string) => {
    console.log('handleEndHourChange newEndHour', newEndHour);
    const newDate = new Date(newEndHour);
    console.log('handleEndHourChange newDate', newDate);
    setSelectedDateFinal(newDate);
    onChangeEndDate(newDate);
  };

  return (
    <div className="flex items-center mb-3 justify-center ">
      <div className="m-3 mt-1 ">
        <DemoContainer components={['Inicio', 'Final']}>
          <DatePicker
            className=" w-[100px] text-b"
            value={selectedDateInit}
            onChange={(newDate: any) => {
              handleStartDateChange(newDate.format());
            }}
            label="Inicio"
          />
          <DatePicker
            className=" w-[100px] text-b"
            value={selectedDateFinal}
            onChange={(newDate: any) => {
              handleEndDateChange(newDate.format());
            }}
            label="Final"
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default DatePickerDays;
