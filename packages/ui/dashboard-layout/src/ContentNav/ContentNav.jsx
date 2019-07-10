import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      minHeight: '65px',
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      borderTop: '1px solid rgba(29, 63, 102, 0.09)',
    },
  }),
  { name: 'DashboardLayoutContent' },
);

const DashboardLayoutContentNav = ({ className, children }) => {
  const classes = useStyles();

  return <nav className={cn(classes.root, className)}>{children}</nav>;
};

DashboardLayoutContentNav.defaultProps = {
  className: null,
};

DashboardLayoutContentNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutContentNav;
