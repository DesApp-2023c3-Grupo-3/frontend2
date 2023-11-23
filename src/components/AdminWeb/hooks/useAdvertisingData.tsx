import * as React from 'react';
import { Advertising } from '../types/customTypes';
import dayjs, { Dayjs } from 'dayjs';
import { convertCodesToDays } from '../utils/ConvertDaysToCode';
import { Days } from '../Pages/Avisos/components/Form/DayPicker';
import { convertCodesToSectors } from '../utils/AbbreviateSectorName';
import { Sector } from '../components/Sectores';
import { usePayload } from './usePayload';

export function useAdvertisingData(advertising: Advertising | undefined) {
  const [advertisingName, setAdvertisingName] = React.useState(
    advertising ? advertising.name : '',
  );

  const [startHour, setStartHour] = React.useState<Dayjs | null>(
    advertising
      ? dayjs(advertising?.advertisingSchedules[0].schedule.startHour)
      : null,
  );
  const [endHour, setEndHour] = React.useState<Dayjs | null>(
    advertising
      ? dayjs(advertising?.advertisingSchedules[0].schedule.endHour)
      : null,
  );

  const [startDate, setStartDate] = React.useState<Dayjs | null>(
    advertising
      ? dayjs(advertising?.advertisingSchedules[0].schedule.startDate)
      : null,
  );
  const [endDate, setEndDate] = React.useState<Dayjs | null>(
    advertising
      ? dayjs(advertising?.advertisingSchedules[0].schedule.endDate)
      : null,
  );

  const codeDays = advertising?.advertisingSchedules.map(
    (s) => s.schedule.dayCode,
  );

  const dayslist = codeDays ? convertCodesToDays(codeDays) : [];

  const [selectedDays, setSelectedDays] = React.useState<Days[]>(
    advertising ? dayslist : [],
  );

  const [selectedSector, setSelectedSector] = React.useState<any[]>(
    advertising ? advertising.advertisingSectors.map((s) => s.sector) : [],
  );

  const {
    text,
    image,
    video,
    type,
    setTextPayload,
    setImagePayload,
    setVideoPayload,
    setType,
  } = usePayload(advertising);

  return {
    advertisingName,
    startHour,
    endHour,
    startDate,
    endDate,
    selectedDays,
    selectedSector,
    text,
    image,
    video,
    type,
    setAdvertisingName,
    setStartHour,
    setEndHour,
    setStartDate,
    setEndDate,
    setSelectedDays,
    setSelectedSector,
    setTextPayload,
    setImagePayload,
    setVideoPayload,
    setType,
  };
}
