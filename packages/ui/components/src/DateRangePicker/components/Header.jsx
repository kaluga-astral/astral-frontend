import PropTypes from 'prop-types';
import React from 'react';
import { setMonth, setYear } from 'date-fns';

import { makeStyles } from '@astral-frontend/styles';

import FlexContainer from '../../FlexContainer';
import FlexItem from '../../FlexItem';
import IconButton from '../../IconButton';
import ArrowLeftThinIcon from './ArrowLeftThinIcon';
import ArrowRightThinIcon from './ArrowRightThinIcon';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';

const useStyles = makeStyles(theme => ({
  selectorsContainer: {
    flexBasis: 150,
    margin: theme.spacing(0, 5),
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
}));

const Header = ({
  date,
  nextDisabled,
  onClickNext,
  onClickPrevious,
  prevDisabled,
  setDate,
  translation,
}) => {
  console.log('biba', date);
  const classes = useStyles();
  const handleMonthChange = event => {
    setDate(setMonth(date, parseInt(event.target.value, 10)));
  };

  const handleYearChange = event => {
    setDate(setYear(date, parseInt(event.target.value, 10)));
  };

  return (
    <FlexContainer justifyContent="center" alignItems="center">
      <FlexItem
        component={IconButton}
        className={classes.icon}
        size="small"
        disabled={prevDisabled}
        onClick={onClickPrevious}
      >
        <ArrowLeftThinIcon className={classes.arrowIcon} />
      </FlexItem>
      <FlexItem
        className={classes.selectorsContainer}
        component={FlexContainer}
        justifyContent="center"
      >
        <FlexItem
          component={MonthSelector}
          date={date}
          translation={translation}
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
        disabled={nextDisabled}
        onClick={onClickNext}
      >
        <ArrowRightThinIcon className={classes.arrowIcon} />
      </FlexItem>
    </FlexContainer>
  );
};

Header.defaultProps = {
  translation: null,
};

Header.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  nextDisabled: PropTypes.bool.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrevious: PropTypes.func.isRequired,
  prevDisabled: PropTypes.bool.isRequired,
  setDate: PropTypes.func.isRequired,
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

export default Header;
