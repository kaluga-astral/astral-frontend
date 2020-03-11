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
  }),
  {
    name: 'DashboardLayoutAsideNavLink',
  },
);

const DashboardLayoutAsideNavLink = ({ className, Icon, text, ...props }) => {
  const classes = useStyles();

  return (
    <AsideNavItem
      {...props}
      text={text}
      Icon={Icon}
      component={NavLink}
      activeClassName={classes.active}
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
