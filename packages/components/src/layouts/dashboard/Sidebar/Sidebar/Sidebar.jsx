import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const DashboardSidebar = ({ classes, children, className }) => (
  <aside className={cn(classes.root, className)}>{children}</aside>
);

DashboardSidebar.defaultProps = {
  className: null,
  children: null,
};

DashboardSidebar.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '215px',
      background: theme.palette.primary.dark,
      zIndex: 2,
    },
  }),
  { name: 'DashboardSidebar' },
)(DashboardSidebar);
