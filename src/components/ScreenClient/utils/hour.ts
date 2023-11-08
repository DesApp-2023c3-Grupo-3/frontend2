import dayjs from 'dayjs';

export function createHour() {
  const date = new Date();
  let hour = date.getHours().toString();
  let minute = date.getMinutes().toString();
  let seconds = date.getSeconds().toString();

  if (hour.length < 2) hour = '0' + hour;
  if (minute.length < 2) minute = '0' + minute;
  if (seconds.length < 2) seconds = '0' + seconds;

  return { hour, minute, seconds };
}

export function formatDate(date: string) {
  const newDate = dayjs(new Date(date));

  const hour = String(newDate.hour()).padStart(2, '0');
  const minutes = String(newDate.minute()).padStart(2, '0');
  const seconds = String(newDate.second()).padStart(2, '0');

  return `${hour}:${minutes}:${seconds}`;
}

export function isActiveMessage({
  startHour,
  endHour,
}: {
  startHour: string;
  endHour: string;
}) {
  const { hour, minute, seconds } = createHour();

  const actualHour = `${hour}:${minute}:${seconds}`;
  const startHourFormat = formatDate(startHour);
  const endHourFormat = formatDate(endHour);

  return actualHour >= startHourFormat && actualHour <= endHourFormat;
}
