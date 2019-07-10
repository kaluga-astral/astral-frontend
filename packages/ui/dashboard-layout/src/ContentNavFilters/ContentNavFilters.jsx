import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      height: '100%',
      marginLeft: '34px',
      '&>*': {
        marginRight: '40px',
      },
    },
  }),
  { name: 'DashboardLayoutContentNavFilters' },
);

const DashboardLayoutContentNavFilters = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

DashboardLayoutContentNavFilters.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutContentNavFilters;
