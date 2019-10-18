import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SvgIcon } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import SidebarNavItem from '../SidebarNavItem';

const useStyles = makeStyles(
  theme => ({
    root: {},
    icon: {
      fontSize: theme.typography.pxToRem(4),
    },
    text: {
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(16),
    },
  }),
  {
    name: 'DashboardLayoutSidebarNavDropdownItem',
  },
);

const DashboardLayoutSidebarNavDropdownItemComponent = React.forwardRef((componentProps, ref) => (
  <NavLink {...componentProps} ref={ref} />
));

const DashboardLayoutSidebarNavDropdownItem = ({ className, text, ...props }) => {
  const classes = useStyles();

  return (
    <li className={cn(classes.root, className)}>
      <SidebarNavItem
        Icon={iconProps => (
          <SvgIcon viewBox="0 0 4 4" className={cn(classes.icon, iconProps.className)}>
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </SvgIcon>
        )}
        Text={textProps => <div className={cn(classes.text, textProps.className)}>{text}</div>}
        component={DashboardLayoutSidebarNavDropdownItemComponent}
        {...props}
      />
    </li>
  );
};

DashboardLayoutSidebarNavDropdownItem.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavDropdownItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default DashboardLayoutSidebarNavDropdownItem;
