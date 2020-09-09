import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@astral-frontend/styles';

import AsideNavItem from '../AsideNavItem';
import AsideNavLinkIcon from './AsideNavLinkIcon';

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
  const memoizedIcon = React.useMemo(() => {
    return () => {
      return <AsideNavLinkIcon component={Icon} />;
    };
  }, []);

  return (
    <AsideNavItem
      component={NavLink}
      text={text}
      Icon={memoizedIcon}
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
