import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

interface DatePickerDaysProps {
  onChangeStartDate: (newStartDate: Date) => void;
  onChangeEndDate: (newEndDate: Date) => void;
  init?: string;
  final?: string;
}

function DatePickerDays({
  onChangeStartDate,
  onChangeEndDate,
  init,
  final,
}: DatePickerDaysProps) {
  const parsedStartDate = init ? dayjs(init, 'DD-MM-YYYY') : null;
  const parsedEndDate = final ? dayjs(final, 'DD-MM-YYYY') : null;

  const [selectedDateInit, setSelectedDateInit] = React.useState<
    Date | null | Dayjs
  >(parsedStartDate);
  const [selectedDateFinal, setSelectedDateFinal] = React.useState<
    Date | null | Dayjs
  >(parsedEndDate);

  const handleStartDateChange = (newStartDate: any) => {
    setSelectedDateInit(newStartDate);
    onChangeStartDate(newStartDate);
  };
  const handleEndDateChange = (newEndDate: any) => {
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
            onChange={(newDate: any) => {
              handleStartDateChange(newDate);
            }}
            label="Fecha de Inicio"
            defaultValue={selectedDateInit}
          />
          <DatePicker
            disablePast
            className="w-[100px]"
            value={selectedDateFinal}
            onChange={(newDate: any) => {
              handleEndDateChange(newDate);
            }}
            label="Fecha Final"
            minDate={selectedDateInit || null}
            defaultValue={selectedDateFinal}
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default DatePickerDays;
