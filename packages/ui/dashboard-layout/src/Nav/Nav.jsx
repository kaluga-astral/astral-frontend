import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '64px',
      alignItems: 'center',
      margin: theme.spacing(0, 4),
      userSelect: 'none',
    },
  }),
  { name: 'DashboardLayoutNav' },
);

const DashboardLayoutNav = ({ className, children }) => {
  const classes = useStyles();

  return (
    <FlexContainer component="nav" className={cn(classes.root, className)}>
      {children}
    </FlexContainer>
  );
};

DashboardLayoutNav.defaultProps = {
  className: null,
};

DashboardLayoutNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutNav;
