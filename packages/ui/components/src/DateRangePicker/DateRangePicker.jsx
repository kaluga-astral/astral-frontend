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
  translation,
}) => {
  const today = new Date();
  const minDateValid = parseOptionalDate(minDate, addYears(today, -10));
  const maxDateValid = parseOptionalDate(maxDate, addYears(today, 10));
  const [intialFirstMonth, initialSecondMonth] = getValidatedMonths(
    initialDateRange || {},
    minDateValid,
    maxDateValid,
  );
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
    const firstNew = addMonths(firstMonth, action);
    setFirstMonth(firstNew);
  };
  const onDayHover = day => {
    if (startDate && !endDate && (!hoverDay || !isSameDay(day, hoverDay))) {
      setHoverDay(day);
    }
    // if (startDate && !endDate) {
    //   if (!hoverDay || !isSameDay(day, hoverDay)) {
    //     setHoverDay(day);
    //   }
    // }
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
      firstMonth={firstMonth}
      secondMonth={secondMonth}
      setFirstMonth={setFirstMonthValidated}
      setSecondMonth={setSecondMonthValidated}
      helpers={helpers}
      handlers={handlers}
      translation={translation}
    />
  ) : null;
};

DateRangePicker.defaultProps = {
  initialDateRange: null,
  maxDate: null,
  minDate: null,
  onChange: () => {},
  translation: null,
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
  translation: PropTypes.shape({
    weekDays: PropTypes.arrayOf(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
    ).isRequired,
    // date-fns locale https://date-fns.org/v2.11.1/docs/format
    locale: PropTypes.shape({
      code: PropTypes.string,
      formatDistance: PropTypes.func,
      formatRelative: PropTypes.func,
      localize: {
        ordinalNumber: PropTypes.func.isRequired,
        era: PropTypes.func.isRequired,
        quarter: PropTypes.func.isRequired,
        month: PropTypes.func.isRequired,
        day: PropTypes.func.isRequired,
        dayPeriod: PropTypes.func.isRequired,
      },
      formatLong: {
        date: PropTypes.func.isRequired,
        time: PropTypes.func.isRequired,
        dateTime: PropTypes.func.isRequired,
      },
      match: {
        ordinalNumber: PropTypes.func.isRequired,
        era: PropTypes.func.isRequired,
        quarter: PropTypes.func.isRequired,
        month: PropTypes.func.isRequired,
        day: PropTypes.func.isRequired,
        dayPeriod: PropTypes.func.isRequired,
      },
      options: {
        weekStartsOn: PropTypes.oneOf(0, 1, 2, 3, 4, 5, 6),
        firstWeekContainsDate: PropTypes.oneOf(1, 2, 3, 4, 5, 6, 7),
      },
    }),
  }),
};
export default DateRangePicker;
