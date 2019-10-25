import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonBase } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import SidebarNavItem from '../SidebarNavItem';

const useStyles = makeStyles(
  theme => ({
    root: {},
    icon: {},
    text: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightMedium,
    },
    active: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      borderRadius: '4px',
      margin: '0 10px',
    },
  }),
  {
    name: 'DashboardLayoutSidebarNavLink',
  },
);

const SidebarNavItemComponent = React.forwardRef((props, ref) => (
  <ButtonBase
    {...props}
    ref={ref}
    component={React.forwardRef((componentProps, componentRef) => (
      <NavLink {...componentProps} innerRef={componentRef} />
    ))}
  />
));

const DashboardLayoutSidebarNavLink = ({
 className, Icon, text, ...props 
}) => {
  const classes = useStyles();

  return (
    <li className={cn(classes.root, className)}>
      <SidebarNavItem
        activeClassName={classes.active}
        Icon={iconProps => (
          <Icon className={cn(classes.icon, iconProps.className)} />
        )}
        Text={textProps => (
          <div className={cn(classes.text, textProps.className)}>{text}</div>
        )}
        component={SidebarNavItemComponent}
        {...props}
      />
    </li>
  );
};

DashboardLayoutSidebarNavLink.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavLink.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default DashboardLayoutSidebarNavLink;
