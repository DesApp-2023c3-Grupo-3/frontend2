import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers';

interface PickerTimeProps {
  onChangeStartHour: (newStartHour: Date) => void;
  onChangeEndHour: (newEndHour: Date) => void;
}

function PickerTime({ onChangeStartHour, onChangeEndHour }: PickerTimeProps) {
  const [selectedDateInit, setSelectedDateInit] = React.useState<Date | null>(
    null,
  );
  const [selectedDateFinal, setSelectedDateFinal] = React.useState<Date | null>(
    null,
  );

  const handleStartHourChange = (newStartHour: Date) => {
    const newDate = new Date(newStartHour);
    setSelectedDateInit(newDate);
    onChangeStartHour(newDate);
  };

  const handleEndHourChange = (newEndHour: Date) => {
    const newDate = new Date(newEndHour);
    setSelectedDateFinal(newDate);
    onChangeEndHour(newDate);
  };

  return (
    <div className="flex items-center justify-center">
      <div className=" ">
        <DemoContainer components={['Inicio', 'Final']}>
          <TimePicker
            className=" w-[100px]"
            label="Hora de Inicio"
            value={selectedDateInit}
            onChange={(newTime: any) => {
              if (newTime !== null) {
                handleStartHourChange(newTime);
              }
            }}
          />

          <TimePicker
            className=" w-[100px] "
            label="Hora Final"
            value={selectedDateFinal}
            onChange={(newTime: any) => {
              if (newTime !== null) {
                handleEndHourChange(newTime);
              }
            }}
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default PickerTime;
