import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '20px',
      lineHeight: theme.typography.pxToRem(20),
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
  {
    name: 'DashboardLayoutSidebarNavItem',
  },
);

const DashboardLayoutSidebarNavItem = React.forwardRef(
  ({
    className, component: Component, Icon, Text, ...props
  }, ref) => {
    const classes = useStyles();

    return (
      <Component
        ref={ref}
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
  },
);

DashboardLayoutSidebarNavItem.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavItem.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string, PropTypes.func]).isRequired,
  Icon: PropTypes.func.isRequired,
  Text: PropTypes.func.isRequired,
};

export default DashboardLayoutSidebarNavItem;
