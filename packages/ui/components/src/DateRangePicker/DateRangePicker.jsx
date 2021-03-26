import PropTypes from 'prop-types';
import * as React from 'react';
import {
  addMonths,
  addYears,
  isAfter,
  isBefore,
  isSameDay,
  isWithinInterval,
} from 'date-fns';

import Menu from './Menu';
import { getValidatedMonths, parseOptionalDate } from './utils';

const DateRangePicker = ({
  initialDateRange,
  maxDate,
  minDate,
  onChange,
  open,
}) => {
  const today = new Date();
  const minDateValid = parseOptionalDate(minDate, addYears(today, -10));
  const maxDateValid = parseOptionalDate(maxDate, addYears(today, 10));
  const [intialtMonth] = getValidatedMonths(
    initialDateRange || {},
    minDateValid,
    maxDateValid,
  );
  const [dateRange, setDateRange] = React.useState({ ...initialDateRange });
  const [hoverDay, setHoverDay] = React.useState();
  const [month, setMonth] = React.useState(intialtMonth || today);
  const { startDate, endDate } = dateRange;
  const handleDayClick = day => {
    if (startDate && !endDate) {
      setDateRange({ startDate, endDate: day });
      setHoverDay(day);
      onChange({ startDate, endDate: day });
    } else if (!startDate && endDate) {
      setDateRange({ startDate: day, endDate });
      setHoverDay(day);
      onChange({ startDate: day, endDate });
    } else {
      setDateRange({ startDate: day, endDate: null });
      setHoverDay(day);
    }
  };
  const handleMonthNavigate = action => {
    const firstNew = addMonths(month, action);
    setMonth(firstNew);
  };
  const handleDayHover = day => {
    if (!hoverDay || !isSameDay(day, hoverDay)) {
      if (startDate && !endDate && isBefore(day, startDate)) {
        setDateRange({ startDate: null, endDate: startDate });
      }
      if (!startDate && endDate && isAfter(day, endDate)) {
        setDateRange({ startDate: endDate, endDate: null });
      }
      if ((startDate && !endDate) || (!startDate && endDate)) {
        setHoverDay(day);
      }
    }
  };
  const inHoverRange = day => {
    if (startDate && endDate) {
      return isWithinInterval(day, { start: startDate, end: endDate });
    }
    if (startDate && !endDate) {
      return isWithinInterval(day, { start: startDate, end: hoverDay });
    }
    if (!startDate && endDate) {
      return isWithinInterval(day, { start: hoverDay, end: endDate });
    }

    return false;
  };

  return open ? (
    <Menu
      dateRange={dateRange}
      minDate={minDateValid}
      maxDate={maxDateValid}
      month={month}
      setMonth={date => setMonth(date)}
      inHoverRange={inHoverRange}
      handleDayClick={handleDayClick}
      handleDayHover={handleDayHover}
      handleMonthNavigate={handleMonthNavigate}
    />
  ) : null;
};

DateRangePicker.defaultProps = {
  initialDateRange: null,
  maxDate: null,
  minDate: null,
  onChange: () => {},
};

DateRangePicker.propTypes = {
  initialDateRange: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }),
  maxDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  onChange: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
export default DateRangePicker;
