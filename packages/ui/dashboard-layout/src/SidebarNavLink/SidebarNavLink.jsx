import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonBase } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

import SidebarNavItem from '../SidebarNavItem';

const DashboardLayoutSidebarNavLink = ({
  classes,
  className,
  Icon,
  text,
  ...props
}) => (
  <li className={cn(classes.root, className)}>
    <SidebarNavItem
      Icon={iconProps => (
        <Icon className={cn(classes.icon, iconProps.className)} />
      )}
      Text={textProps => (
        <div className={cn(classes.text, textProps.className)}>{text}</div>
      )}
      component={componentProps => (
        <ButtonBase component={NavLink} {...componentProps} />
      )}
      {...props}
    />
  </li>
);

DashboardLayoutSidebarNavLink.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavLink.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(
  theme => ({
    root: {},
    icon: {
      fontSize: '20px',
    },
    text: {
      fontSize: '16px',
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
  {
    name: 'DashboardLayoutSidebarNavLink',
  },
)(DashboardLayoutSidebarNavLink);
