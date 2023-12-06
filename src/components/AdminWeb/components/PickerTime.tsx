import { TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import * as React from 'react';

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
  const [openInit, setOpenInit] = React.useState(false);
  const [openFinal, setOpenFinal] = React.useState(false);

  const handleStartHourChange = (newStartHour: Dayjs) => {
    onChangeStartHour(dayjs(newStartHour));
    setOpenInit(false);
  };

  const handleEndHourChange = (newEndHour: Dayjs) => {
    onChangeEndHour(dayjs(newEndHour));
    setOpenFinal(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[40%] min-w-[160px] mr-3">
        <TimePicker
          label="Hora de Inicio"
          value={selectedHourInit}
          defaultValue={selectedHourInit}
          onChange={(newTime: any) => {
            onChangeStartHour(dayjs(newTime));
          }}
          onAccept={(newTime: any) => {
            handleStartHourChange(dayjs(newTime));
          }}
          open={openInit}
          onOpen={() => {
            setOpenFinal(false);
            setOpenInit(true);
          }}
        />
      </div>
      <div className="w-[40%] min-w-[160px]">
        <TimePicker
          label="Hora Final"
          value={selectedHourFinal}
          onChange={(newTime: any) => {
            onChangeEndHour(dayjs(newTime));
          }}
          onAccept={(newTime: any) => {
            handleEndHourChange(dayjs(newTime));
          }}
          defaultValue={selectedHourFinal}
          open={openFinal}
          onOpen={() => {
            setOpenInit(false);
            setOpenFinal(true);
          }}
          disabled={!selectedHourInit}
        />
      </div>
    </div>
  );
}

export default PickerTime;
