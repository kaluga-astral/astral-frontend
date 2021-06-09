import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from '@astral/core';
import { makeStyles } from '@astral/styles';
import { getDate, isSameMonth, isToday, isWithinInterval } from 'date-fns';

import FlexContainer from '../FlexContainer';
import FlexItem from '../FlexItem';

import {
  chunks,
  getDaysInMonth,
  inDateRange,
  isEndOfRange,
  isRangeSameDay,
  isStartOfRange,
} from './utils';
import Header from './Header';
import Day from './Day';

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(0, 6),
    },
    weekDaysContainer: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
    },
    weekDay: {
      width: 48,
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
  handleDayClick,
  handleDayHover,
  handleMonthNavigate,
  inHoverRange,
  maxDate,
  minDate,
  setMonth,
  value: date,
}) => {
  const classes = useStyles();

  return (
    <FlexContainer direction="column" className={classes.root}>
      <Header
        component={Header}
        date={date}
        setMonth={setMonth}
        onClickPrevious={() => handleMonthNavigate(-1)}
        onClickNext={() => handleMonthNavigate(1)}
      />
      <FlexItem
        component={FlexContainer}
        direction="row"
        justifyContent="center"
        className={classes.weekDaysContainer}
      >
        {WEEK_DAYS.map(day => (
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
                inDateRange(dateRange, day) || inHoverRange(day);

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
                  onClick={() => handleDayClick(day)}
                  onHover={() => handleDayHover(day)}
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

Month.propTypes = {
  dateRange: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }).isRequired,
  handleDayClick: PropTypes.func.isRequired,
  handleDayHover: PropTypes.func.isRequired,
  handleMonthNavigate: PropTypes.func.isRequired,
  inHoverRange: PropTypes.func.isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  setMonth: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
};

export default Month;
