import { Dayjs } from 'dayjs';
import DatePickerDays from '../../../../../components/DatePickerDays';
import PickerTime from '../../../../../components/PickerTime';
import DayPicker, { Days } from '../DayPicker';
import { useEffect } from 'react';
import React from 'react';

interface CalenderMobileProp {
  setStartDate: (newStartDate: Dayjs) => void;
  setEndDate: (newEndDate: Dayjs) => void;
  startDate: null | Dayjs;
  endDate: null | Dayjs;
  setStartHour: (a: Dayjs) => void;
  setEndHour: (a: Dayjs) => void;
  startHour: null | Dayjs;
  endHour: null | Dayjs;
  setSelectedDays: (a: any) => void;
  selectedDays: Days[];
  isCreate: boolean;
}

export function CalenderMobile({
  setStartDate,
  setEndDate,
  startDate,
  endDate,
  isCreate,
  setStartHour,
  setEndHour,
  startHour,
  endHour,
  setSelectedDays,
  selectedDays,
}: CalenderMobileProp) {
  return (
    <>
      <div className="ml-[20px] text-[24px] font-bold mt-[-50px]">
        <span>FECHA Y HORA</span>
      </div>
      <div className="mt-[3em]">
        <DatePickerDays
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
          selectedDateInit={startDate}
          selectedDateFinal={endDate}
          isCreate={isCreate}
        />
      </div>
      <div className="mt-[2em]">
        <PickerTime
          onChangeStartHour={setStartHour}
          onChangeEndHour={setEndHour}
          selectedHourInit={startHour}
          selectedHourFinal={endHour}
        />
      </div>
      <div className="my-[5em]">
        <DayPicker
          onSelectedDaysChange={setSelectedDays}
          selectedDays={selectedDays}
        />
      </div>
    </>
  );
}
