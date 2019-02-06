import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import ButtonBase from '../../../../ButtonBase';
import NavItemIcon from './NavItemIcon';
import NavItemText from './NavItemText';

const DashboardSidebarNavLink = ({
  classes, className, icon, text, hasNotification, ...props
}) => (
  <ButtonBase component="li" className={cn(classes.root, className)}>
    <NavLink className={classes.link} activeClassName={classes.active} {...props}>
      {icon && <NavItemIcon hasNotification={hasNotification} icon={icon} />}
      <NavItemText>{text}</NavItemText>
    </NavLink>
  </ButtonBase>
);

DashboardSidebarNavLink.defaultProps = {
  icon: null,
  hasNotification: false,
  className: null,
};

DashboardSidebarNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.func,
  text: PropTypes.string.isRequired,
  hasNotification: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.shape({
    selected: PropTypes.string,
  }).isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'list-item',
      width: '100%',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      padding: '15px 20px',
      lineHeight: '20px',
      fontSize: '16px',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.common.white,
      textDecoration: 'none',
      '&:hover': {
        background: theme.palette.action.hover,
      },
      '&$active': {
        background: theme.palette.primary.main,
      },
    },
    active: {},
  }),
  { name: 'DashboardSidebarNavLink' },
)(DashboardSidebarNavLink);
