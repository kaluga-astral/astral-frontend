import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutContainer = ({ classes, className, children }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

DashboardLayoutContainer.defaultProps = {
  className: null,
};

DashboardLayoutContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      display: 'flex',
      flexGrow: 1,
      overflow: 'hidden',
    },
  }),
  { name: 'DashboardLayoutContainer' },
)(DashboardLayoutContainer);
