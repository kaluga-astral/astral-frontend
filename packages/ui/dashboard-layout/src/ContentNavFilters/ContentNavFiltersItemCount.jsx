import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

// TODO: вынести в паке utils
function nFormatter(num, digits) {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'т' },
    { value: 1e6, symbol: 'м' },
    { value: 1e9, symbol: 'М' },
    { value: 1e12, symbol: 'Т' },
    { value: 1e15, symbol: 'к' },
    { value: 1e18, symbol: 'К' },
  ];
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (
    (num / si[i].value)
      .toFixed(digits)
      .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
  );
}

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '20px',
      lineHeight: '20px',
      marginLeft: '6px',
      padding: theme.spacing(0, 2),
      borderRadius: `${theme.shape.borderRadius}px`,
      backgroundColor: theme.palette.primary.light,
      '&$active': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
    active: {},
  }),
  { name: 'DashboardLayoutContentNavItemCount' },
);

const DashboardLayoutContentNavItemCount = ({
  loading,
  active,
  count,
  className,
}) => {
  const classes = useStyles();
  const children = loading ? null : nFormatter(count, 1);

  return (
    <div className={cn(classes.root, { [classes.active]: active }, className)}>
      {children}
    </div>
  );
};

DashboardLayoutContentNavItemCount.defaultProps = {
  loading: false,
  active: false,
  className: null,
};

DashboardLayoutContentNavItemCount.propTypes = {
  loading: PropTypes.bool,
  active: PropTypes.bool,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

export default DashboardLayoutContentNavItemCount;
