const dayOrder = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

export const createSchedule = (advertising: Advertising) => {
  if (advertising.advertisingSchedules.length === 7) {
    return 'Todos los días';
  } else {
    return advertising.advertisingSchedules
      .map((schedule) => schedule.schedule.dayCode)
      .map((dayCode) => dayCode.charAt(0).toUpperCase() + dayCode.slice(1).toLowerCase())
      .sort((previousDayCode, nextDayCode) => {
        return dayOrder.indexOf(previousDayCode) - dayOrder.indexOf(nextDayCode);
      })
      .join('-');
  }
};
