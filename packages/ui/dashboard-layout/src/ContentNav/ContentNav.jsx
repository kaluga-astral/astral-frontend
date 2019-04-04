import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutContentNav = ({ classes, className, children }) => (
  <nav className={cn(classes.root, className)}>
    <div className={classes.wrapper}>{children}</div>
  </nav>
);

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
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      margin: '0 15px',
      borderTop: '1px solid rgba(29, 63, 102, 0.09)',
    },
  }),
  { name: 'DashboardLayoutContent' },
)(DashboardLayoutContentNav);
