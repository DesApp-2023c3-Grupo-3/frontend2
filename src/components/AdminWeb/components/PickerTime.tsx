import { parseTime, Time } from '@internationalized/date';
import { TimeInput } from '@nextui-org/react';
import { I18nProvider } from '@react-aria/i18n';
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
  const dayjsToTimeValue = (time: Dayjs | null) => {
    return time ? parseTime(time.format('HH:mm')) : null;
  };

  const timeValueToDayjs = (time: Time) => {
    return dayjs(`${time.hour}:${time.minute}`, 'HH:mm');
  };

  const handleStartHourChange = (newStartHour: Time) => {
    onChangeStartHour(timeValueToDayjs(newStartHour));
  };

  const handleEndHourChange = (newEndHour: Time) => {
    onChangeEndHour(timeValueToDayjs(newEndHour));
  };

  return (
    <I18nProvider>
      <div className="flex gap-2">
        <TimeInput
          defaultValue={new Time()}
          label="Hora de Inicio"
          value={dayjsToTimeValue(selectedHourInit ?? null)}
          onChange={handleStartHourChange}
        />
        <TimeInput
          label="Hora de Inicio"
          value={dayjsToTimeValue(selectedHourFinal ?? null)}
          onChange={handleEndHourChange}
          isDisabled={!selectedHourInit}
        />
      </div>
    </I18nProvider>
  );
}

export default PickerTime;
