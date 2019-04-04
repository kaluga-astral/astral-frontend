import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutSidebar = ({ classes, className, children }) => (
  <aside className={cn(classes.root, className)}>{children}</aside>
);

DashboardLayoutSidebar.defaultProps = {
  className: null,
};

DashboardLayoutSidebar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      width: '260px',
      backgroundColor: theme.palette.background.paper,
    },
  }),
  { name: 'DashboardLayoutSidebar' },
)(DashboardLayoutSidebar);
