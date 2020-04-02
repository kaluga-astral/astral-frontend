import PropTypes from 'prop-types';
import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Typography, Divider } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

import FlexContainer from '../../FlexContainer';
import FlexItem from '../../FlexItem';

const useStyles = makeStyles(
  theme => ({
    root: {
      minHeight: 36,
      margin: theme.spacing(3),
      borderRadius: theme.spacing(1),
      border: `1px solid ${theme.palette.primary.light}`,
    },
    date: {
      flexBasis: '50%',
      padding: theme.spacing(0, 2),
    },
    datePrefix: {
      color: theme.palette.gray[200],
    },
  }),
  { name: 'DateRange' },
);

const DateRange = ({ endDate, startDate, translation }) => {
  const classes = useStyles();

  return (
    <FlexContainer alignItems="center" className={classes.root}>
      <Typography variant="subtitle2" className={classes.date}>
        {startDate && [
          <span key="prefix" className={classes.datePrefix}>
            {`от `}
          </span>,
          <span key="date">
            {format(startDate, 'dd.MM.yyyy', {
              locale: translation?.locale ?? ru,
            })}
          </span>,
        ]}
      </Typography>
      <FlexItem alignSelf="stretch">
        <Divider orientation="vertical" variant="middle" />
      </FlexItem>
      <Typography variant="subtitle2" className={classes.date}>
        {endDate && [
          <span key="prefix">до </span>,
          <span key="date">
            {format(endDate, 'dd.MM.yyyy', {
              locale: translation?.locale ?? ru,
            })}
          </span>,
        ]}
      </Typography>
    </FlexContainer>
  );
};

DateRange.defaultProps = {
  endDate: null,
  startDate: null,
  translation: null,
};

DateRange.propTypes = {
  endDate: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
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

export default DateRange;
