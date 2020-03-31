import {
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  isBefore,
  addDays,
  isSameDay,
  isWithinInterval,
  toDate,
  isValid,
  max,
  min,
  isSameMonth,
  addMonths,
} from 'date-fns';

export const getValidatedMonths = (range, minDate, maxDate) => {
  const { startDate, endDate } = range;
  if (startDate && endDate) {
    const newStart = max([startDate, minDate]);
    const newEnd = min([endDate, maxDate]);
    return [
      newStart,
      isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd,
    ];
  }
  return [startDate, endDate];
};

export const chunks = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size),
  );
};
// Date
export const getDaysInMonth = (date, options) => {
  const startWeek = startOfWeek(startOfMonth(date), options);
  const endWeek = endOfWeek(endOfMonth(date), options);
  const days = [];
  for (let curr = startWeek; isBefore(curr, endWeek); ) {
    days.push(curr);
    curr = addDays(curr, 1);
  }
  return days;
};

export const isStartOfRange = ({ startDate }, day) =>
  startDate && isSameDay(day, startDate);

export const isEndOfRange = ({ endDate }, day) =>
  endDate && isSameDay(day, endDate);

export const inDateRange = ({ startDate, endDate }, day) =>
  startDate &&
  endDate &&
  (isWithinInterval(day, { start: startDate, end: endDate }) ||
    isSameDay(day, startDate) ||
    isSameDay(day, endDate));

export const isRangeSameDay = ({ startDate, endDate }) => {
  if (startDate && endDate) {
    return isSameDay(startDate, endDate);
  }
  return false;
};

export const parseOptionalDate = (date, defaultValue) => {
  if (date) {
    const parsed = toDate(date);
    if (isValid(parsed)) return parsed;
  }
  return defaultValue;
};
