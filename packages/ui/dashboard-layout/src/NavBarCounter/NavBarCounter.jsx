import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import { NavBarContext } from '../NavBar';
import NavBarCounterCount from './NavBarCounterCount';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      padding: theme.spacing(2.5, 4),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:not(:last-child)': {
        marginRight: theme.spacing(4),
      },
    },
    count: {
      fontWeight: theme.typography.fontWeightBold,
    },
    active: {
      backgroundColor: theme.palette.primary.light,
    },
  }),
  { name: 'DashboardLayoutNavCounter' },
);

const DashboardLayoutNavCounter = ({
  loading,
  active,
  text,
  count,
  component: Component,
  className,
  ...props
}) => {
  const classes = useStyles();
  const { selectedItemsLength } = React.useContext(NavBarContext);

  if (selectedItemsLength > 0) {
    return null;
  }

  return (
    <Component
      className={cn(classes.root, { [classes.active]: active }, className)}
      {...props}
    >
      {text && <span className={classes.text}>{text}</span>}
      <NavBarCounterCount
        active={active}
        count={count}
        loading={loading}
        className={classes.count}
      />
    </Component>
  );
};

DashboardLayoutNavCounter.defaultProps = {
  loading: false,
  active: false,
  text: null,
  count: null,
  className: null,
  component: 'div',
};

DashboardLayoutNavCounter.propTypes = {
  loading: PropTypes.bool,
  active: PropTypes.bool,
  text: PropTypes.string,
  count: PropTypes.number,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export default DashboardLayoutNavCounter;
