import PropTypes from 'prop-types';
import React from 'react';
import { Paper } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { differenceInCalendarMonths } from 'date-fns';
import FlexContainer from '../../FlexContainer';
import Head from './Head';
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
        <Head
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
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    months: PropTypes.arrayOf(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
    ).isRequired,
    weekDays: PropTypes.arrayOf(
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
      PropTypes.string.isRequired,
    ).isRequired,
    locale: PropTypes.shape({}),
  }),
};

export default Menu;
