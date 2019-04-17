import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutSidebarNavItem = ({
  classes,
  className,
  component: Component,
  Icon,
  Text,
  ...props
}) => (
  <Component
    className={cn(classes.root, className)}
    activeClassName={classes.active}
    {...props}
  >
    {Icon && (
      <div className={classes.icon}>
        <Icon />
      </div>
    )}
    <Text className={classes.text} />
  </Component>
);

DashboardLayoutSidebarNavItem.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  component: PropTypes.func.isRequired,
  Icon: PropTypes.func.isRequired,
  Text: PropTypes.func.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '15px 20px',
      lineHeight: '20px',
      textAlign: 'left',
      textDecoration: 'none',
      color: theme.palette.grey[600],
      '&$active': {
        color: theme.palette.primary.main,
        borderRight: '3px solid',
        borderRightColor: theme.palette.primary.main,
      },
    },
    active: {},
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginRight: '15px',
      width: '32px',
    },
    text: {
      flexGrow: 1,
    },
  }),
  { name: 'DashboardLayoutSidebarNavItemMainComponent' },
)(DashboardLayoutSidebarNavItem);
