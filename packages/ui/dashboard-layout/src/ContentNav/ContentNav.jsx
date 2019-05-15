import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import Action from './ContentNavAction';

const DashboardLayoutContentNav = ({ classes, className, children }) => (
  <nav className={cn(classes.root, className)}>{children}</nav>
);

DashboardLayoutContentNav.Action = Action;

DashboardLayoutContentNav.defaultProps = {
  className: null,
};

DashboardLayoutContentNav.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      minHeight: '65px',
      backgroundColor: theme.palette.common.white,
      borderTop: '1px solid rgba(29, 63, 102, 0.09)',
    },
  }),
  { name: 'DashboardLayoutContent' },
)(DashboardLayoutContentNav);
