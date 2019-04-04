import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutHeader = ({ classes, className, children }) => (
  <header className={cn(classes.root, className)}>{children}</header>
);

DashboardLayoutHeader.defaultProps = {
  className: null,
};

DashboardLayoutHeader.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      height: '75px',
      flexShrink: 0,
      backgroundColor: theme.palette.background.paper,
    },
  }),
  { name: 'DashboardLayoutHeader' },
)(DashboardLayoutHeader);
