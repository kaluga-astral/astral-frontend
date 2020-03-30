import * as React from 'react';
import {
  addMonths,
  isSameDay,
  isWithinInterval,
  isAfter,
  isBefore,
  isSameMonth,
  addYears,
  max,
  min,
} from 'date-fns';
import Menu from './components/Menu';
import { defaultRanges } from './defaults';
import { parseOptionalDate } from './utils';
import { MARKERS } from './markers';

const getValidatedMonths = (range, minDate, maxDate) => {
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
const DateRangePicker = props => {
  const today = new Date();
  const {
    open,
    onChange,
    initialDateRange,
    minDate,
    maxDate,
    definedRanges = defaultRanges,
    translation,
  } = props;
  const minDateValid = parseOptionalDate(minDate, addYears(today, -10));
  const maxDateValid = parseOptionalDate(maxDate, addYears(today, 10));
  const [intialFirstMonth, initialSecondMonth] = getValidatedMonths(
    initialDateRange || {},
    minDateValid,
    maxDateValid,
  );
  // console.log("rendering DateRangePicker");
  const [dateRange, setDateRange] = React.useState({ ...initialDateRange });
  const [hoverDay, setHoverDay] = React.useState();
  const [firstMonth, setFirstMonth] = React.useState(intialFirstMonth || today);
  const [secondMonth, setSecondMonth] = React.useState(
    initialSecondMonth || addMonths(firstMonth, 1),
  );
  const { startDate, endDate } = dateRange;
  // handlers
  const setFirstMonthValidated = date => {
    if (isBefore(date, secondMonth)) {
      setFirstMonth(date);
    }
  };
  const setSecondMonthValidated = date => {
    if (isAfter(date, firstMonth)) {
      setSecondMonth(date);
    }
  };
  const setDateRangeValidated = range => {
    let { startDate: newStart, endDate: newEnd } = range;
    if (newStart && newEnd) {
      range.startDate = newStart = max([newStart, minDateValid]);
      range.endDate = newEnd = min([newEnd, maxDateValid]);
      setDateRange(range);
      onChange(range);
      setFirstMonth(newStart);
      setSecondMonth(
        isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd,
      );
    }
  };
  const onDayClick = day => {
    if (startDate && !endDate && !isBefore(day, startDate)) {
      const newRange = { startDate, endDate: day };
      onChange(newRange);
      setDateRange(newRange);
    } else {
      setDateRange({ startDate: day, endDate: undefined });
    }
    setHoverDay(day);
  };
  const onMonthNavigate = (marker, action) => {
    if (marker == MARKERS.FIRST_MONTH) {
      const firstNew = addMonths(firstMonth, action);
      if (isBefore(firstNew, secondMonth)) setFirstMonth(firstNew);
    } else {
      const secondNew = addMonths(secondMonth, action);
      if (isBefore(firstMonth, secondNew)) setSecondMonth(secondNew);
    }
  };
  const onDayHover = date => {
    if (startDate && !endDate) {
      if (!hoverDay || !isSameDay(date, hoverDay)) {
        setHoverDay(date);
      }
    }
  };
  // helpers
  const inHoverRange = day => {
    return (
      startDate &&
      !endDate &&
      hoverDay &&
      isAfter(hoverDay, startDate) &&
      isWithinInterval(day, { start: startDate, end: hoverDay })
    );
  };
  const helpers = {
    inHoverRange,
  };
  const handlers = {
    onDayClick,
    onDayHover,
    onMonthNavigate,
  };
  return open ? (
    <Menu
      dateRange={dateRange}
      minDate={minDateValid}
      maxDate={maxDateValid}
      ranges={definedRanges}
      firstMonth={firstMonth}
      secondMonth={secondMonth}
      setFirstMonth={setFirstMonthValidated}
      setSecondMonth={setSecondMonthValidated}
      setDateRange={setDateRangeValidated}
      helpers={helpers}
      handlers={handlers}
      translation={translation}
    />
  ) : null;
};
export default DateRangePicker;
