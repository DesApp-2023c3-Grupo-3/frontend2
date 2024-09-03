import dayjs from 'dayjs';

export const createStarthour = (advertising: Advertising) =>
  dayjs(advertising.advertisingSchedules[0].schedule.startHour).format('HH:mm');
