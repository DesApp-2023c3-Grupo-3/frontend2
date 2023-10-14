import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

interface PickerTimeProps {
  onChangeStartHour: (newStartHour: Date) => void;
  onChangeEndHour: (newEndHour: Date) => void;
  init?: string;
  final?: string;
}

function PickerTime({
  onChangeStartHour,
  onChangeEndHour,
  init,
  final,
}: PickerTimeProps) {
  const [selectedHourInit, setSelectedHourInit] = React.useState<Date | null>(
    init ? new Date(`2018-01-01T${init}`) : null,
  );
  const [selectedHourFinal, setSelectedHourFinal] = React.useState<Date | null>(
    final ? new Date(`2018-01-01T${final}`) : null,
  );

  const handleStartHourChange = (newStartHour: Date) => {
    if (newStartHour) {
      const newDate = new Date(newStartHour);
      setSelectedHourInit(newDate);
      onChangeStartHour(newDate);
    }
  };

  const handleEndHourChange = (newEndHour: Date) => {
    if (newEndHour) {
      const newDate = new Date(newEndHour);
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
            onChange={(newTime: Date | null) => {
              if (newTime) {
                handleStartHourChange(newTime);
              }
            }}
            defaultValue={selectedHourInit ? selectedHourInit : null}
          />

          <TimePicker
            className=" w-[100px] "
            label="Hora Final"
            value={selectedHourFinal}
            onChange={(newTime: Date | null) => {
              if (newTime) {
                handleEndHourChange(newTime);
              }
            }}
            defaultValue={selectedHourFinal ? selectedHourFinal : null}
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default PickerTime;
