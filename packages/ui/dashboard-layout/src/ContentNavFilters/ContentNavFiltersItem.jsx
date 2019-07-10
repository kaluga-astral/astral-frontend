import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      color: 'rgba(29, 63, 102, 0.62)',
      textDecoration: 'none',
    },
    active: {
      color: theme.palette.primary.main,
      '& div': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
    text: {},
    count: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '20px',
      marginLeft: '10px',
      padding: '0 5px',
      backgroundColor: 'rgba(29, 63, 102, 0.09)',
      color: 'rgba(29, 63, 102, 0.45)',
      borderRadius: '4px',
    },
  }),
  { name: 'DashboardLayoutContentNavItem' },
);

const DashboardLayoutContentNavItem = ({
  active,
  text,
  count,
  component: Component,
  className,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Component className={cn(classes.root, { [classes.active]: active }, className)} {...props}>
      <span className={classes.text}>{text}</span>
      <div className={classes.count}>{count}</div>
    </Component>
  );
};

DashboardLayoutContentNavItem.defaultProps = {
  className: null,
  component: 'div',
};

DashboardLayoutContentNavItem.propTypes = {
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
};

export default DashboardLayoutContentNavItem;
