import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SvgIcon } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import SidebarNavItem from '../SidebarNavItem';
import LayoutContext from '../LayoutContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderLeft: `2px solid ${theme.palette.primary.light}`,
      marginLeft: '25px',
    },
    collapsedItem: {
      padding: '20px 0 20px 8px',
    },
    active: {
      color: theme.palette.primary.main,
      borderLeft: `2px solid ${theme.palette.primary.main}`,
    },
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

const DashboardLayoutSidebarNavDropdownItemComponent = React.forwardRef(
  (componentProps, ref) => <NavLink {...componentProps} ref={ref} />,
);

const DashboardLayoutSidebarNavDropdownItem = ({
  className,
  text,
  ...props
}) => {
  const classes = useStyles();
  const { isSidebarOpen } = React.useContext(LayoutContext);
  if (isSidebarOpen) {
    props.Icon = null;
  }

  return (
    <li>
      <SidebarNavItem
        activeClassName={classes.active}
        className={cn(
          classes.root,
          { [classes.collapsedItem]: !isSidebarOpen },
          className,
        )}
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
