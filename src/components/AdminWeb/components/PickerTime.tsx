import { TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

interface PickerTimeProps {
  onChangeStartHour: (newStartHour: Dayjs) => void;
  onChangeEndHour: (newEndHour: Dayjs) => void;
  selectedHourInit?: Dayjs | null;
  selectedHourFinal?: Dayjs | null;
}

function PickerTime({
  onChangeStartHour,
  onChangeEndHour,
  selectedHourInit,
  selectedHourFinal,
}: PickerTimeProps) {
  const handleStartHourChange = (newStartHour: Dayjs) => {
    const newDate = dayjs(newStartHour);
    if (newStartHour) {
      const newDate = dayjs(newStartHour);
      onChangeStartHour(newDate);
    }
  };

  const handleEndHourChange = (newEndHour: Dayjs) => {
    if (newEndHour) {
      const newDate = dayjs(newEndHour);
      onChangeEndHour(newDate);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[40%] min-w-[160px] mr-3">
        <TimePicker
          label="Hora de Inicio"
          value={selectedHourInit}
          defaultValue={selectedHourInit}
          onAccept={(newTime: any) => {
            handleStartHourChange(newTime);
          }}
        />
      </div>
      <div className="w-[40%] min-w-[160px]">
        <TimePicker
          label="Hora Final"
          value={selectedHourFinal}
          onAccept={(newTime: any) => {
            handleEndHourChange(newTime);
          }}
          defaultValue={selectedHourFinal}
          disabled={!selectedHourInit}
        />
      </div>
    </div>
  );
}

export default PickerTime;
