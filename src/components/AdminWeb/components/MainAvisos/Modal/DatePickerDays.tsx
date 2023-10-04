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

  const handleStartDateChange = (newStartDate: Date) => {
    setSelectedDateInit(newStartDate);
    onChangeStartDate(newStartDate);
  };

  const handleEndDateChange = (newEndDate: Date) => {
    setSelectedDateFinal(newEndDate);
    onChangeEndDate(newEndDate);
  };

  return (
    <div className="flex items-center mb-3 justify-center ">
      <div className="m-3 mt-1 ">
        <DemoContainer components={['Inicio', 'Final']}>
          <DatePicker
            disablePast
            className=" w-[100px] text-b"
            value={selectedDateInit}
            onChange={(newDate: Date | null) => {
              if (newDate !== null) {
                handleStartDateChange(newDate);
              }
            }}
            label="Inicio"
          />
          <DatePicker
            className=" w-[100px] text-b"
            value={selectedDateFinal}
            onChange={(newDate: any) => {
              if (newDate !== null) {
                handleEndDateChange(newDate);
              }
            }}
            label="Final"
            minDate={selectedDateInit || undefined}
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default DatePickerDays;
