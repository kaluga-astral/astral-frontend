import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      textAlign: 'left',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  }),
  { name: 'DashboardLayoutActionButtonText' },
);

const DashboardLayoutActionButtonText = ({ text }) => {
  const classes = useStyles();

  return <div className={classes.root}>{text}</div>;
};

DashboardLayoutActionButtonText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DashboardLayoutActionButtonText;
