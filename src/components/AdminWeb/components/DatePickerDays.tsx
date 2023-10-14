import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

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
  const [selectedDateInit, setSelectedDateInit] = React.useState<Date | null>(
    init !== undefined ? new Date(`${init}T00:00`) : null,
  );
  const [selectedDateFinal, setSelectedDateFinal] = React.useState<Date | null>(
    final ? new Date(final) : null,
  );

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
            defaultValue={selectedDateInit ? selectedDateInit : null}
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
            defaultValue={selectedDateFinal ? selectedDateFinal : null}
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default DatePickerDays;
