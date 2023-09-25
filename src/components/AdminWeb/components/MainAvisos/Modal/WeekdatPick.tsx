import * as React from 'react';
import { TimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

function WeekdayPick() {
  return (
    <div className="">
      <TimePicker ampm={false} />
    </div>
  );
}

export default WeekdayPick;
