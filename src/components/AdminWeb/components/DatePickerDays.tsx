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
  onChangeStartDate: (newStartDate: Dayjs | null) => void;
  onChangeEndDate: (newEndDate: Dayjs | null) => void;
  selectedDateInit: null | Dayjs;
  selectedDateFinal: null | Dayjs;
  isCreate: boolean;
  hasError: boolean;
}

function DatePickerDays({
  onChangeStartDate,
  onChangeEndDate,
  selectedDateInit,
  selectedDateFinal,
  hasError,
  isCreate,
}: DatePickerDaysProps) {
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
      <div className="flex md:flex-row gap-2 flex-col md:p-0 p-3 items-center ">
        <span className="md:hidden block text-center text-xl font-semibold dark:text-white">
          Fecha
        </span>
        <DatePicker
          defaultValue={dayjsToDateValue(selectedDateInit)}
          onChange={(newDate: CalendarDate | null) => {
            if (!newDate) {
              onChangeStartDate(null);
            } else {
              onChangeStartDate(
                dayjs(new Date(newDate.year, newDate.month - 1, newDate.day)),
              );
            }
          }}
          isInvalid={hasError}
          label="Fecha de Inicio"
          isDateUnavailable={dateValueToDayjs}
          minValue={today(getLocalTimeZone())}
        />
        <DatePicker
          defaultValue={dayjsToDateValue(selectedDateFinal)}
          onChange={(newDate: CalendarDate | null) => {
            if (newDate) {
              onChangeEndDate(
                dayjs(new Date(newDate.year, newDate.month - 1, newDate.day)),
              );
            } else {
              onChangeEndDate(null);
            }
          }}
          isInvalid={hasError}
          label="Fecha Final"
          isDisabled={!selectedDateInit}
          minValue={today(getLocalTimeZone())}
        />
      </div>
    </I18nProvider>
  );
}

export default DatePickerDays;
