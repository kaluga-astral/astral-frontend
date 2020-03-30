import PropTypes from 'prop-types';
import { Grid, IconButton, Select, MenuItem } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import React from 'react';
import { ArrowIcon, ArrowRightIcon } from '@astral-frontend/icons';
import { setMonth, getMonth, setYear, getYear } from 'date-fns';

const useStyles = makeStyles({
  iconContainer: {
    padding: 5,
  },
  icon: {
    padding: 10,
    '&:hover': {
      background: 'none',
    },
  },
});

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

const generateYears = (relativeTo, count) => {
  const half = Math.floor(count / 2);
  return Array(count)
    .fill(0)
    .map((_, i) => relativeTo.getFullYear() - half + i); // TODO: make part of the state
};

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
    <Grid container justify="space-between" alignItems="center">
      <Grid item className={classes.iconContainer}>
        <IconButton
          className={classes.icon}
          disabled={prevDisabled}
          onClick={onClickPrevious}
        >
          <ArrowIcon color={prevDisabled ? 'disabled' : 'action'} />
        </IconButton>
      </Grid>
      <Grid item>
        <Select
          value={getMonth(date)}
          onChange={handleMonthChange}
          MenuProps={{ disablePortal: true }}
        >
          {months.map((month, idx) => (
            <MenuItem key={month} value={idx}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid item>
        <Select
          value={getYear(date)}
          onChange={handleYearChange}
          MenuProps={{ disablePortal: true }}
        >
          {generateYears(date, 30).map(year => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>

        {/* <Typography>{format(date, "MMMM YYYY")}</Typography> */}
      </Grid>
      <Grid item className={classes.iconContainer}>
        <IconButton
          className={classes.icon}
          disabled={nextDisabled}
          onClick={onClickNext}
        >
          <ArrowRightIcon color={nextDisabled ? 'disabled' : 'action'} />
        </IconButton>
      </Grid>
    </Grid>
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
