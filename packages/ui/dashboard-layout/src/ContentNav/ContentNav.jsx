import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      minHeight: '65px',
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      borderTop: '1px solid rgba(29, 63, 102, 0.09)',
    },
  }),
  { name: 'DashboardLayoutContentNav' },
);

const DashboardLayoutContentNav = ({ className, children }) => {
  const classes = useStyles();

  return (
    <FlexContainer component="nav" className={cn(classes.root, className)}>
      {children}
    </FlexContainer>
  );
};

DashboardLayoutContentNav.defaultProps = {
  className: null,
};

DashboardLayoutContentNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutContentNav;
