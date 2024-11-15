import dayjs, { Dayjs } from "dayjs";

export function validationDate(start: Date | null | Dayjs, end: Date | null | Dayjs) {
  return (
    dayjs(start).format() === 'Invalid Date' ||
    dayjs(end).format() === 'Invalid Date' ||
    validateYears(start, end)
  );
}

export function validateYears(firstDate: Date | null | Dayjs, secondDate: Date | null | Dayjs) {
  return (
    validateYear(firstDate) || validateYear(secondDate)
  )
}

export function validateYear(date: Date | null | Dayjs) {
  return (
    dayjs(date).year() < dayjs(new Date()).year()
  )
}