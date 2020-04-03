import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { getDate, isSameMonth, isToday, isWithinInterval } from 'date-fns';
import FlexContainer from '../../FlexContainer';
import FlexItem from '../../FlexItem';
import {
  chunks,
  getDaysInMonth,
  isStartOfRange,
  isEndOfRange,
  inDateRange,
  isRangeSameDay,
} from '../utils';
import Header from './Header';
import Day from './Day';

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const useStyles = makeStyles(
  theme => ({
    root: {},
    weekDaysContainer: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
    },
    weekDay: {
      width: 32,
      color: theme.palette.gray[600],
    },
    daysContainer: {
      marginBottom: theme.spacing(3),
    },
    week: {
      '&:nth-last-child(n + 2)': {
        marginBottom: theme.spacing(2),
      },
    },
  }),
  { name: 'Month' },
);

const Month = ({
  dateRange,
  handlers,
  helpers,
  maxDate,
  minDate,
  navState,
  setValue: setDate,
  translation,
  value: date,
}) => {
  const classes = useStyles();
  const [back, forward] = navState;

  return (
    <FlexContainer direction="column" className={classes.root}>
      <Header
        component={Header}
        date={date}
        setDate={setDate}
        nextDisabled={!forward}
        prevDisabled={!back}
        onClickPrevious={() => handlers.onMonthNavigate(-1)}
        onClickNext={() => handlers.onMonthNavigate(1)}
      />
      <FlexItem
        component={FlexContainer}
        direction="row"
        justifyContent="center"
        className={classes.weekDaysContainer}
      >
        {(translation?.weekDays ?? WEEK_DAYS).map(day => (
          <FlexItem
            component={Typography}
            align="center"
            key={day}
            variant="subtitle2"
            className={classes.weekDay}
          >
            {day}
          </FlexItem>
        ))}
      </FlexItem>
      <FlexItem
        component={FlexContainer}
        direction="column"
        justify="space-between"
        className={classes.daysContainer}
      >
        {chunks(getDaysInMonth(date, { weekStartsOn: 1 }), 7).map(week => (
          <FlexItem
            component={FlexContainer}
            key={week}
            direction="row"
            justifyContent="center"
            className={classes.week}
          >
            {week.map(day => {
              const isStart = isStartOfRange(dateRange, day);
              const isEnd = isEndOfRange(dateRange, day);
              const isRangeOneDay = isRangeSameDay(dateRange);
              const highlighted =
                inDateRange(dateRange, day) || helpers.inHoverRange(day);

              return (
                <Day
                  key={day}
                  filled={isStart || isEnd}
                  outlined={isToday(day)}
                  highlighted={highlighted && !isRangeOneDay}
                  disabled={
                    !isSameMonth(date, day) ||
                    !isWithinInterval(day, { start: minDate, end: maxDate })
                  }
                  startOfRange={isStart && !isRangeOneDay}
                  endOfRange={isEnd && !isRangeOneDay}
                  onClick={() => handlers.onDayClick(day)}
                  onHover={() => handlers.onDayHover(day)}
                  value={getDate(day)}
                />
              );
            })}
          </FlexItem>
        ))}
      </FlexItem>
    </FlexContainer>
  );
};

Month.defaultProps = {
  translation: null,
};

Month.propTypes = {
  dateRange: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }).isRequired,
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
  navState: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
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

export default Month;
