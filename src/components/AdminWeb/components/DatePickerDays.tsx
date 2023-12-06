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
    <div className="flex items-center justify-center">
      <div className="w-[40%] min-w-[120px] mr-3">
        <DatePicker
          disablePast={isCreate}
          className=""
          value={selectedDateInit}
          onChange={(newDate: any) => {
            onChangeStartDate(newDate);
          }}
          label="Fecha de Inicio"
          defaultValue={dateStart}
        />
      </div>
      <div className="w-[40%] min-w-[120px]">
        <DatePicker
          disablePast={isCreate}
          className=""
          value={selectedDateFinal}
          onChange={(newDate: any) => {
            onChangeEndDate(newDate);
          }}
          label="Fecha Final"
          minDate={selectedDateInit || null}
          defaultValue={dateStart}
          disabled={!selectedDateInit}
        />
      </div>
    </div>
  );
}

export default DatePickerDays;
