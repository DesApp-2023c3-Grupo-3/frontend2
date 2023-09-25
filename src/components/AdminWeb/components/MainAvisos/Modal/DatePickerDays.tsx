import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers';

function DatePickerDays() {
  const [selectedDateInit, setSelectedDateInit] = React.useState<String | null>(
    null,
  );
  const [selectedDateFinal, setSelectedDateFinal] =
    React.useState<String | null>(null);

  return (
    <div className="flex items-center mb-3">
      <DemoContainer components={['Inicio', 'Final']}>
        <DatePicker
          value={selectedDateInit}
          onChange={(newDate) => {
            setSelectedDateInit(newDate);
          }}
        />
        <p className="font-[300] text-[2em]">-</p>
        <DatePicker
          value={selectedDateFinal}
          onChange={(newDate) => {
            setSelectedDateFinal(newDate);
          }}
        />
      </DemoContainer>
    </div>
  );
}

export default DatePickerDays;
