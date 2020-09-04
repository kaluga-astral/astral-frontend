import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@astral-frontend/styles';

import AsideNavItem from '../AsideNavItem';

const useStyles = makeStyles(
  theme => ({
    root: {},
    active: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    icon: {
      margin: theme.spacing(3, 4),
      flexShrink: 0,
    },
  }),
  {
    name: 'DashboardLayoutAsideNavLink',
  },
);

const DashboardLayoutAsideNavLink = ({ className, Icon, text, ...props }) => {
  const classes = useStyles();

  return (
    <AsideNavItem
      component={NavLink}
      text={text}
      Icon={() => <Icon className={classes.icon} />}
      activeClassName={classes.active}
      {...props}
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
