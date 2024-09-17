import { DatePicker, DateValue } from '@nextui-org/react';
import dayjs, { Dayjs } from 'dayjs';
import {
  CalendarDate,
  getLocalTimeZone,
  parseDate,
  today,
} from '@internationalized/date';
import { I18nProvider } from '@react-aria/i18n';

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

  const dateValueToDayjs = (dateValue: DateValue | null) => {
    if (dateValue) {
      const { year, month, day } = dateValue;
      const dateValueDayjs = dayjs(new Date(year, month - 1, day));
      const today = dayjs().startOf('day');

      return dateValueDayjs.isBefore(today, 'day');
    }
    return false;
  };

  return (
    <I18nProvider>
      <div className="flex gap-2 items-center">
        <DatePicker
          value={dayjsToDateValue(selectedDateInit)}
          onChange={(newDate: CalendarDate) => {
            onChangeStartDate(
              dayjs(new Date(newDate.year, newDate.month - 1, newDate.day)),
            );
          }}
          label="Fecha de Inicio"
          isDateUnavailable={dateValueToDayjs}
          minValue={today(getLocalTimeZone())}
          errorMessage="Fecha no disponible"
        />
        <DatePicker
          value={dayjsToDateValue(selectedDateFinal)}
          onChange={(newDate: CalendarDate) => {
            onChangeEndDate(
              dayjs(new Date(newDate.year, newDate.month - 1, newDate.day)),
            );
          }}
          label="Fecha Final"
          isDisabled={!selectedDateInit}
          minValue={today(getLocalTimeZone())}
          errorMessage="Fecha no disponible"
        />
      </div>
    </I18nProvider>
  );
}

export default DatePickerDays;
