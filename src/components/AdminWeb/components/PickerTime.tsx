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
  hasError: boolean;
}

function PickerTime({
  onChangeStartHour,
  onChangeEndHour,
  selectedHourInit,
  selectedHourFinal,
  hasError,
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
      <div className="flex md:flex-row gap-2 flex-col md:p-0 px-3">
        <span className="md:hidden block text-xl font-semibold text-center">
          Hora
        </span>
        <TimeInput
          label="Hora de Inicio"
          value={dayjsToTimeValue(selectedHourInit ?? null)}
          onChange={handleStartHourChange}
          isInvalid={hasError}
        />
        <TimeInput
          label="Hora Final"
          className="md:m-0 mt-2"
          value={dayjsToTimeValue(selectedHourFinal ?? null)}
          onChange={handleEndHourChange}
          isDisabled={!selectedHourInit}
          isInvalid={hasError}
        />
      </div>
    </I18nProvider>
  );
}

export default PickerTime;
