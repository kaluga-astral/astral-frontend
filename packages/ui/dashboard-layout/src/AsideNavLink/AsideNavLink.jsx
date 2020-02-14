import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonBase } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import AsideNavItem from '../AsideNavItem';

const useStyles = makeStyles(
  theme => ({
    root: {},
    icon: {},
    text: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
    },
    active: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      borderRadius: `${theme.shape.borderRadius}px`,
    },
  }),
  {
    name: 'DashboardLayoutAsideNavLink',
  },
);

const AsideNavItemComponent = React.forwardRef((props, ref) => (
  <ButtonBase
    {...props}
    ref={ref}
    component={React.forwardRef((componentProps, componentRef) => (
      <NavLink {...componentProps} innerRef={componentRef} />
    ))}
  />
));

const DashboardLayoutAsideNavLink = ({ className, Icon, text, ...props }) => {
  const classes = useStyles();

  return (
    <li className={cn(classes.root, className)}>
      <AsideNavItem
        tooltipText={text}
        activeClassName={classes.active}
        Icon={iconProps => (
          <Icon className={cn(classes.icon, iconProps.className)} />
        )}
        Text={textProps => (
          <div className={cn(classes.text, textProps.className)}>{text}</div>
        )}
        component={AsideNavItemComponent}
        {...props}
      />
    </li>
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
