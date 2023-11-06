import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
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
      <div className=" ">
        <DemoContainer components={['Inicio', 'Final']}>
          <TimePicker
            className=" w-[100px]"
            label="Hora de Inicio"
            value={selectedHourInit}
            onChange={(newTime: any) => {
              handleStartHourChange(newTime);
            }}
            defaultValue={selectedHourInit}
          />

          <TimePicker
            className=" w-[100px] "
            label="Hora Final"
            value={selectedHourFinal}
            onChange={(newTime: any) => {
              handleEndHourChange(newTime);
            }}
            defaultValue={selectedHourFinal}
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default PickerTime;
