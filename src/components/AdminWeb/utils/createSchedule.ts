const dayOrder = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

export const createSchedule = (advertising: Advertising) => {
  if (advertising.advertisingSchedules.length === 7) {
    return 'Todos los días';
  } else {
    return advertising.advertisingSchedules
      .map((schedule) => schedule.schedule.dayCode)
      .map((d) => d.charAt(0).toUpperCase() + d.slice(1).toLowerCase())
      .sort((a, b) => {
        return dayOrder.indexOf(a) - dayOrder.indexOf(b);
      })
      .join('-');
  }
};
