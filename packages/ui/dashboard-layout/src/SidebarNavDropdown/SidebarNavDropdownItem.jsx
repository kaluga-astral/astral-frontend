import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SvgIcon } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

import SidebarNavItem from '../SidebarNavItem';

const DashboardLayoutSidebarNavDropdownItem = ({
  classes,
  className,
  text,
  ...props
}) => (
  <li className={cn(classes.root, className)}>
    <SidebarNavItem
      Icon={iconProps => (
        <SvgIcon
          viewBox="0 0 4 4"
          className={cn(classes.icon, iconProps.className)}
        >
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </SvgIcon>
      )}
      Text={textProps => (
        <div className={cn(classes.text, textProps.className)}>{text}</div>
      )}
      component={componentProps => <NavLink {...componentProps} />}
      {...props}
    />
  </li>
);

DashboardLayoutSidebarNavDropdownItem.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavDropdownItem.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default withStyles(
  theme => ({
    root: {},
    icon: {
      fontSize: '4px',
    },
    text: {
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '16px',
    },
  }),
  {
    name: 'DashboardLayoutSidebarNavDropdownItem',
  },
)(DashboardLayoutSidebarNavDropdownItem);
