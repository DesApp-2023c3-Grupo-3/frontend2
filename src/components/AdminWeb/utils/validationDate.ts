import dayjs, { Dayjs } from 'dayjs';

export function validationDate(
  start: Date | null | Dayjs,
  end: Date | null | Dayjs,
) {
  return (
    dayjs(start).format() === 'Invalid Date' ||
    dayjs(end).format() === 'Invalid Date'
  );
}
