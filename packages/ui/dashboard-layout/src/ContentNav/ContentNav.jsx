import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import Filters from './ContentNavFilters';
import Action from './ContentNavAction';
import Item from './ContentNavItem';

const DashboardLayoutContentNav = ({ classes, className, children }) => (
  <nav className={cn(classes.root, className)}>{children}</nav>
);

DashboardLayoutContentNav.Filters = Filters;
DashboardLayoutContentNav.Action = Action;
DashboardLayoutContentNav.Item = Item;

DashboardLayoutContentNav.defaultProps = {
  className: null,
};

DashboardLayoutContentNav.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      height: '65px',
      backgroundColor: 'white',
      display: 'flex',
    },
  }),
  { name: 'DashboardLayoutContent' },
)(DashboardLayoutContentNav);
