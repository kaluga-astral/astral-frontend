import PropTypes from 'prop-types';
import React from 'react';
import { Paper } from '@astral-frontend/core';

import FlexContainer from '../FlexContainer';

import DateRange from './DateRange';
import Month from './Month';

const Menu = ({
  dateRange,
  month,
  handleDayClick,
  handleDayHover,
  handleMonthNavigate,
  inHoverRange,
  maxDate,
  minDate,
  setMonth,
}) => (
  <Paper>
    <FlexContainer direction="column" wrap="nowrap">
      <DateRange dateRange={dateRange} />
      <Month
        dateRange={dateRange}
        minDate={minDate}
        maxDate={maxDate}
        inHoverRange={inHoverRange}
        handleDayClick={handleDayClick}
        handleDayHover={handleDayHover}
        handleMonthNavigate={handleMonthNavigate}
        value={month}
        setMonth={setMonth}
      />
    </FlexContainer>
  </Paper>
);

Menu.propTypes = {
  dateRange: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }).isRequired,
  month: PropTypes.instanceOf(Date).isRequired,
  handleDayClick: PropTypes.func.isRequired,
  handleDayHover: PropTypes.func.isRequired,
  handleMonthNavigate: PropTypes.func.isRequired,
  inHoverRange: PropTypes.func.isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  setMonth: PropTypes.func.isRequired,
};

export default Menu;
