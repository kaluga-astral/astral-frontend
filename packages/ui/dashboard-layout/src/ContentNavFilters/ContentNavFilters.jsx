import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer, FlexItem } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'flex',
      flex: 1,
      padding: '0 30px',
      alignItems: 'center',
      height: '100%',
    },
  }),
  { name: 'DashboardLayoutContentNavFilters' },
);

const DashboardLayoutContentNavFilters = ({ children }) => {
  const classes = useStyles();

  return (
    <FlexContainer component={FlexItem} grow={1} className={classes.root}>
      {children}
    </FlexContainer>
  );
};

DashboardLayoutContentNavFilters.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutContentNavFilters;
