import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer, FlexItem } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
    },
  }),
  { name: 'DashboardLayoutContentNavFilters' },
);

const DashboardLayoutContentNavFilters = ({ children }) => {
  const classes = useStyles();

  return (
    <FlexContainer className={classes.root} component={FlexItem} grow={1} alignItems="center">
      {children}
    </FlexContainer>
  );
};

DashboardLayoutContentNavFilters.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutContentNavFilters;
