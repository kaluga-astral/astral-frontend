import PropTypes from 'prop-types';
import React from 'react';
import { Paper } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { differenceInCalendarMonths } from 'date-fns';
import FlexContainer from '../../FlexContainer';
import DateRange from './DateRange';
import Month from './Month';

const useStyles = makeStyles(() => ({ root: { width: 290 } }), {
  name: 'Menu',
});

const Menu = ({
  dateRange,
  firstMonth,
  handlers,
  helpers,
  maxDate,
  minDate,
  secondMonth,
  setFirstMonth,
  translation,
}) => {
  const classes = useStyles();
  const { startDate, endDate } = dateRange;
  const canNavigateCloser =
    differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = { dateRange, minDate, maxDate, helpers, handlers };
  return (
    <Paper className={classes.root}>
      <FlexContainer direction="column" wrap="nowrap">
        <DateRange
          startDate={startDate}
          endDate={endDate}
          translation={translation}
        />
        <Month
          {...commonProps}
          value={firstMonth}
          setValue={setFirstMonth}
          navState={[true, canNavigateCloser]}
          translation={translation}
          weekDays={translation?.weekDays}
          months={translation?.months}
        />
      </FlexContainer>
    </Paper>
  );
};

Menu.defaultProps = {
  secondMonth: null,
  translation: null,
};

Menu.propTypes = {
  dateRange: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }).isRequired,
  firstMonth: PropTypes.instanceOf(Date).isRequired,
  handlers: PropTypes.shape({
    onDayClick: PropTypes.func,
    onDayHover: PropTypes.func,
    onMonthNavigate: PropTypes.func,
  }).isRequired,
  helpers: PropTypes.shape({
    inHoverRange: PropTypes.func,
  }).isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  secondMonth: PropTypes.instanceOf(Date),
  setFirstMonth: PropTypes.func.isRequired,
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

export default Menu;
