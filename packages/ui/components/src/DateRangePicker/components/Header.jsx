import PropTypes from 'prop-types';
import React from 'react';
import { setMonth, setYear } from 'date-fns';

import { makeStyles } from '@astral-frontend/styles';
import { ArrowIcon, ArrowRightIcon } from '@astral-frontend/icons';
import FlexContainer from '../../FlexContainer';
import FlexItem from '../../FlexItem';
import IconButton from '../../IconButton';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  selectorsContainer: {
    flexBasis: 150,
    margin: theme.spacing(0, 8),
  },
}));

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const Header = ({
  date,
  setDate,
  nextDisabled,
  prevDisabled,
  onClickNext,
  onClickPrevious,
  months = MONTHS,
}) => {
  const classes = useStyles();
  const handleMonthChange = event => {
    setDate(setMonth(date, parseInt(event.target.value, 10)));
  };

  const handleYearChange = event => {
    setDate(setYear(date, parseInt(event.target.value, 10)));
  };

  return (
    <FlexContainer
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <FlexItem
        component={IconButton}
        className={classes.icon}
        size="small"
        disabled={prevDisabled}
        onClick={onClickPrevious}
      >
        <ArrowIcon color={prevDisabled ? 'disabled' : 'action'} />
      </FlexItem>
      <FlexItem
        className={classes.selectorsContainer}
        component={FlexContainer}
        justifyContent="center"
      >
        <FlexItem
          component={MonthSelector}
          date={date}
          months={months}
          onChange={handleMonthChange}
        />
        <FlexItem
          component={YearSelector}
          date={date}
          onChange={handleYearChange}
        />
      </FlexItem>
      <FlexItem
        component={IconButton}
        className={classes.icon}
        size="small"
        disabled={prevDisabled}
        onClick={onClickNext}
      >
        <ArrowRightIcon color={nextDisabled ? 'disabled' : 'action'} />
      </FlexItem>
    </FlexContainer>
  );
};

// Header.propTypes = {
//   date: PropTypes.instanceOf(Date).isRequired,
//   months: PropTypes.arrayOf(PropTypes.string),
//   nextDisabled: PropTypes.bool.isRequired,
//   onClickNext: PropTypes.func.isRequired,
//   onClickPrevious: PropTypes.func.isRequired,
//   prevDisabled: PropTypes.bool.isRequired,
//   setDate: PropTypes.func.isRequired,
// };

export default Header;
