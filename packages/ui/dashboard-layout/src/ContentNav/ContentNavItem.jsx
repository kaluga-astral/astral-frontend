import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutContentNavItem = ({
  classes, className, title, count, to,
}) => (
  <NavLink exact to={to} activeClassName={classes.active} className={cn(classes.root, className)}>
    <span>{title}</span>
    <div className={classes.count}>{count}</div>
  </NavLink>
);

DashboardLayoutContentNavItem.defaultProps = {
  className: null,
};

DashboardLayoutContentNavItem.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      color: 'rgba(29, 63, 102, 0.62)',
      textDecoration: 'none',
    },
    active: {
      color: theme.palette.primary.main,
      '& div': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
    title: {},
    count: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '20px',
      marginLeft: '10px',
      padding: '0 5px',
      backgroundColor: 'rgba(29, 63, 102, 0.09)',
      color: 'rgba(29, 63, 102, 0.45)',
      borderRadius: '4px',
    },
  }),
  { name: 'DashboardLayoutContentNavItem' },
)(withRouter(DashboardLayoutContentNavItem));
