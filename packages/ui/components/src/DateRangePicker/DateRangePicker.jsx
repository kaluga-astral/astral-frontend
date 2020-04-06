import PropTypes from 'prop-types';
import * as React from 'react';
import {
  addMonths,
  isSameDay,
  isWithinInterval,
  isAfter,
  isBefore,
  addYears,
} from 'date-fns';
import Menu from './components/Menu';
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
  const onDayClick = day => {
    if (startDate && !endDate) {
      if (isBefore(day, startDate)) {
        setDateRange({ startDate: day, endDate: startDate });
        setHoverDay(day);
        onChange({ startDate: day, endDate: startDate });
      } else {
        setDateRange({ startDate, endDate: day });
        setHoverDay(day);
        onChange({ startDate, endDate: day });
      }
    } else {
      setDateRange({ startDate: day, endDate: null });
      setHoverDay(day);
    }
  };
  const onMonthNavigate = action => {
    const firstNew = addMonths(month, action);
    setMonth(firstNew);
  };
  const onDayHover = day => {
    if (startDate && !endDate && (!hoverDay || !isSameDay(day, hoverDay))) {
      setHoverDay(day);
    }
  };
  // helpers
  const inHoverRange = day => {
    return isAfter(hoverDay, startDate)
      ? startDate &&
          !endDate &&
          hoverDay &&
          isWithinInterval(day, { start: startDate, end: hoverDay })
      : startDate &&
          !endDate &&
          hoverDay &&
          isWithinInterval(day, { start: hoverDay, end: startDate });
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
      month={month}
      setMonth={date => setMonth(date)}
      inHoverRange={inHoverRange}
      handlers={handlers}
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
