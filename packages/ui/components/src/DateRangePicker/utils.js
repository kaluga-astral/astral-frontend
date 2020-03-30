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
} from 'date-fns';

export const identity = x => x;

export const chunks = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size),
  );
};

export const combine = (...args) => args.filter(identity).join(' ');

// Date
export const getDaysInMonth = date => {
  const startWeek = startOfWeek(startOfMonth(date));
  const endWeek = endOfWeek(endOfMonth(date));
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
