import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayout = ({ classes, className, children }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

DashboardLayout.defaultProps = {
  className: null,
};

DashboardLayout.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  {
    root: {
      display: 'flex',
      // flexDirection: 'column',
      height: '100vh',
    },
  },
  { name: 'DashboardLayout' },
)(DashboardLayout);
