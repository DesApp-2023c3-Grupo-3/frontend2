import dayjs from 'dayjs';

export const createEndHour = (advertising: Advertising) =>
  dayjs(advertising.advertisingSchedules[0].schedule.endHour).format('HH:mm');
