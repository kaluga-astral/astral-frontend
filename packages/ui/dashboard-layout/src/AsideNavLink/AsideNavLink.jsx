import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@astral-frontend/styles';

import AsideNavItem from '../AsideNavItem';

const useStyles = makeStyles(
  theme => ({
    active: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    icon: {
      margin: '12px 16px',
      flexShrink: 0,
    },
  }),
  {
    name: 'DashboardLayoutAsideNavItem',
  },
);

const DashboardLayoutAsideNavLink = ({ className, Icon, text, ...props }) => {
  const classes = useStyles();

  return (
    <AsideNavItem
      {...props}
      activeClassName={classes.active}
      text={text}
      Icon={() => <Icon className={classes.icon} />}
      component={NavLink}
    />
  );
};

DashboardLayoutAsideNavLink.defaultProps = {
  className: null,
};

DashboardLayoutAsideNavLink.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default DashboardLayoutAsideNavLink;
