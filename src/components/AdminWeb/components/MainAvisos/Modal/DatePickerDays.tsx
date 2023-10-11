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
    <div className="flex items-center justify-center ">
      <div className="">
        <DemoContainer components={['Inicio', 'Final']}>
          <DatePicker
            disablePast
            className="w-[100px]"
            value={selectedDateInit}
            onChange={(newDate: Date | null) => {
              if (newDate !== null) {
                handleStartDateChange(newDate);
              }
            }}
            label="Fecha de Inicio"
          />
          <DatePicker
            disablePast
            className="w-[100px]"
            value={selectedDateFinal}
            onChange={(newDate: any) => {
              if (newDate !== null) {
                handleEndDateChange(newDate);
              }
            }}
            label="Fecha Final"
            minDate={selectedDateInit || undefined}
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default DatePickerDays;
