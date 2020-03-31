import PropTypes from 'prop-types';
import React from 'react';
import { Paper, Grid, Typography, Divider } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { format, differenceInCalendarMonths } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ArrowRightIcon } from '@astral-frontend/icons';
import Month from './Month';
import { MARKERS } from '../markers';

const useStyles = makeStyles(theme => ({
  header: {
    padding: '20px 70px',
  },
  headerItem: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.action.hover}`,
    marginBottom: 20,
  },
}));

const Menu = ({
  dateRange,
  minDate,
  maxDate,
  firstMonth,
  setFirstMonth,
  secondMonth,
  setSecondMonth,
  helpers,
  handlers,
  translation,
}) => {
  const classes = useStyles();
  const translationText = {
    startDate: 'Start Date',
    endDate: 'End Date',
    ...translation,
  };
  const { startDate, endDate } = dateRange;
  const canNavigateCloser =
    differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = { dateRange, minDate, maxDate, helpers, handlers };
  return (
    <Paper elevation={5} square>
      <Grid container direction="row" wrap="nowrap">
        <Grid>
          <Grid container className={classes.header} alignItems="center">
            <Grid item className={classes.headerItem}>
              <Typography variant="subtitle1">
                {startDate && [
                  <span key="prefix">от </span>,
                  <span key="date">
                    {format(startDate, 'dd.MM.yyyy', {
                      locale: translation?.locale ?? ru,
                    })}
                  </span>,
                ]}
              </Typography>
            </Grid>
            <Grid item className={classes.headerItem}>
              <ArrowRightIcon color="action" />
            </Grid>
            <Grid item className={classes.headerItem}>
              <Typography variant="subtitle1">
                {endDate && [
                  <span key="prefix">до </span>,
                  <span key="date">
                    {format(endDate, 'dd.MM.yyyy', {
                      locale: translation?.locale ?? ru,
                    })}
                  </span>,
                ]}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container direction="row" justify="center" wrap="nowrap">
            <Month
              {...commonProps}
              value={firstMonth}
              setValue={setFirstMonth}
              navState={[true, canNavigateCloser]}
              marker={MARKERS.FIRST_MONTH}
              weekDays={translationText?.weekDays}
              months={translationText?.months}
            />
            <div className={classes.divider} />
            <Month
              {...commonProps}
              value={secondMonth}
              setValue={setSecondMonth}
              navState={[canNavigateCloser, true]}
              marker={MARKERS.SECOND_MONTH}
              weekDays={translationText?.weekDays}
              months={translationText?.months}
            />
          </Grid>
        </Grid>
        <div className={classes.divider} />
      </Grid>
    </Paper>
  );
};

{
  /* Menu.propTypes = {
  dateRange: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }).isRequired,
  ranges: arrayOf(
    PropTypes.shape({
      startDate: PropTypes.instanceOf(Date),
      endDate: PropTypes.instanceOf(Date),
      label: PropTypes.string,
    }),
  ).isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
  firstMonth: PropTypes.instanceOf(Date).isRequired,
  secondMonth: PropTypes.instanceOf(Date).isRequired,
  setFirstMonth: PropTypes.func,
  setSecondMonth: PropTypes.func,
  setDateRange: PropTypes.func,
  helpers: {
    inHoverRange: PropTypes.func,
  },
  handlers: {
    onDayClick: PropTypes.func,
    onDayHover: PropTypes.func,
    onMonthNavigate: PropTypes.func,
  }.isRequired,
  translation: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    months: arrayOf(PropTypes.string),
    weekDays: arrayOf(PropTypes.string),
    locale: PropTypes.shape({}),
  }),
}; */
}

export default Menu;
