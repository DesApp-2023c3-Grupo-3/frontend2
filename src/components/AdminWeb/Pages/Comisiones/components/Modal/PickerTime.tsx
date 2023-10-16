import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { MobileTimePicker } from '@mui/x-date-pickers';

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

  const handleStartHourChange = (newStartHour: string) => {
    const newDate = new Date(newStartHour);
    setSelectedDateInit(newDate);
    onChangeStartHour(newDate);
  };

  const handleEndHourChange = (newEndHour: string) => {
    const newDate = new Date(newEndHour);
    setSelectedDateFinal(newDate);
    onChangeEndHour(newDate);
  };

  return (
    <div className="flex items-center mb-3 justify-center">
      <div className="m-3 mt-1 ">
        <DemoContainer components={['Inicio', 'Final']}>
          <MobileTimePicker
            className=" w-[100px] "
            label="Inicio"
            value={selectedDateInit}
            onChange={(newTime: any) => handleStartHourChange(newTime.format())}
          />

          <MobileTimePicker
            className=" w-[100px] "
            label="Final"
            value={selectedDateFinal}
            onChange={(newTime: any) => {
              handleEndHourChange(newTime.format());
            }}
          />
        </DemoContainer>
      </div>
    </div>
  );
}

export default PickerTime;
