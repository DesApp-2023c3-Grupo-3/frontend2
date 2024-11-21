import dayjs, { Dayjs } from "dayjs";

export function validationDate(start: Date | null | Dayjs, end: Date | null | Dayjs) {
  return (
    dayjs(start).format() === 'Invalid Date' ||
    dayjs(end).format() === 'Invalid Date' ||
    validateDates(start, end)
  );
}

export function validationHour(start: Date | null | Dayjs, end: Date | null | Dayjs) {
  return (
    dayjs(start).format() === 'Invalid Date' ||
    dayjs(end).format() === 'Invalid Date' ||
    validateTwoHours(start, end)
  )
}

export function validateTwoHours(date1: Date | null | Dayjs, date2: Date | null | Dayjs): boolean {
  const time1 = dayjs(date1).set("year", 2000).set("month", 0).set("date", 1);
  const time2 = dayjs(date2).set("year", 2000).set("month", 0).set("date", 1);

  const diffInMinutes = dayjs(time2).diff(dayjs(time1), "minute");

  return diffInMinutes <= 0;
}

export function validateTwoDates(date1: Date | null | Dayjs, date2: Date | null | Dayjs): boolean {
  const firstDate = dayjs(date1).startOf('day');
  const secondDate = dayjs(date2).startOf('day');

  return firstDate.isAfter(secondDate);
}

export function validateDates(firstDate: Date | null | Dayjs, secondDate: Date | null | Dayjs) {
  return (
    validateDate(firstDate) || validateDate(secondDate)
  )
}

export function validateDate(date: Date | null | Dayjs) {
  const dateConverted = dayjs(date).startOf('day')
  const now = dayjs(new Date()).startOf('day')
  return (
    dateConverted.isBefore(now)
  )
}