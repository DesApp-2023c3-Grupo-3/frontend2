import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

interface DatePickerDaysProps {
  onChangeStartDate: (newStartDate: Dayjs) => void;
  onChangeEndDate: (newEndDate: Dayjs) => void;
  selectedDateInit: null | Dayjs;
  selectedDateFinal: null | Dayjs;
  isCreate: boolean;
}

function DatePickerDays({
  onChangeStartDate,
  onChangeEndDate,
  selectedDateInit,
  selectedDateFinal,
  isCreate,
}: DatePickerDaysProps) {
  const dateStart = selectedDateInit ? dayjs(selectedDateInit) : null;

  return (
    <div className="flex items-center justify-center ">
      <div className="">
        <DemoContainer components={['Inicio', 'Final']}>
          <DatePicker
            disablePast={isCreate}
            className="w-[100px]"
            value={selectedDateInit}
            onChange={(newDate: any) => {
              onChangeStartDate(newDate);
            }}
            label="Fecha de Inicio"
            defaultValue={dateStart}
          />
          <DatePicker
            disablePast={isCreate}
            className="w-[100px]"
            value={selectedDateFinal}
            onChange={(newDate: any) => {
              onChangeEndDate(newDate);
            }}
            label="Fecha Final"
            minDate={selectedDateInit || null}
            defaultValue={dateStart}
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default DatePickerDays;
