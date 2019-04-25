import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutPageTitle = ({
  classes, className, children, ...props
}) => (
  <h1 className={cn(classes.root, className)} {...props}>
    {children}
  </h1>
);

DashboardLayoutPageTitle.defaultProps = {
  className: null,
};

DashboardLayoutPageTitle.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      margin: '0 15px',
      height: '100%',
      fontSize: '18px',
    },
  }),
  { name: 'DashboardLayoutPageTitle' },
)(DashboardLayoutPageTitle);
