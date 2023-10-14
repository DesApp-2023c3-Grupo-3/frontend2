import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

interface PickerTimeProps {
  onChangeStartHour: (newStartHour: any) => void;
  onChangeEndHour: (newEndHour: any) => void;
  init?: string;
  final?: string;
}

function PickerTime({
  onChangeStartHour,
  onChangeEndHour,
  init,
  final,
}: PickerTimeProps) {
  const [selectedHourInit, setSelectedHourInit] = React.useState<
    Date | null | Dayjs
  >(init ? dayjs(`2024-01-01T${init}`) : null);
  const [selectedHourFinal, setSelectedHourFinal] = React.useState<
    Date | null | Dayjs
  >(final ? dayjs(`2024-01-01T${final}`) : null);

  const handleStartHourChange = (newStartHour: any) => {
    if (newStartHour) {
      const newDate = dayjs(newStartHour);
      setSelectedHourInit(newDate);
      onChangeStartHour(newDate);
    }
  };

  const handleEndHourChange = (newEndHour: any) => {
    if (newEndHour) {
      const newDate = dayjs(newEndHour);
      setSelectedHourFinal(newDate);
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
