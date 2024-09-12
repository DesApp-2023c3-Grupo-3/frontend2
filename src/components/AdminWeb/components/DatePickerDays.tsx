import { DatePicker } from '@nextui-org/react';
import dayjs, { Dayjs } from 'dayjs';
import { CalendarDate, parseDate } from '@internationalized/date';

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

  const dayjsToDateValue = (date: Dayjs | null) => {
    return date ? parseDate(date.format('YYYY-MM-DD')) : null;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[40%] min-w-[120px] mr-3">
        <DatePicker
          className=""
          value={dayjsToDateValue(selectedDateInit)}
          onChange={(newDate: CalendarDate) => {
            onChangeStartDate(
              dayjs(new Date(newDate.year, newDate.month - 1, newDate.day)),
            );
          }}
          label="Fecha de Inicio"
          defaultValue={dayjsToDateValue(dateStart)}
        />
      </div>
      <div className="w-[40%] min-w-[120px]">
        <DatePicker
          className=""
          value={dayjsToDateValue(selectedDateFinal)}
          onChange={(newDate: CalendarDate) => {
            onChangeEndDate(
              dayjs(new Date(newDate.year, newDate.month - 1, newDate.day)),
            );
          }}
          label="Fecha Final"
          defaultValue={dayjsToDateValue(dateStart)}
        />
      </div>
    </div>
  );
}

export default DatePickerDays;
