import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { List } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutSidebarNav = ({ classes, className, children }) => (
  <nav className={cn(classes.root, className)}>
    <List className={classes.list}>{children}</List>
  </nav>
);

DashboardLayoutSidebarNav.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNav.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      flexGrow: 1,
      padding: 0,
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    list: {},
  }),
  { name: 'DashboardLayoutSidebarNav' },
)(DashboardLayoutSidebarNav);
