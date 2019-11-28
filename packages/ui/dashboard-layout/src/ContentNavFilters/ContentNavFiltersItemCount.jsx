import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

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

const DashboardLayoutContentNavItemCount = ({ active, count, className }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, { [classes.active]: active }, className)}>
      {count}
    </div>
  );
};

DashboardLayoutContentNavItemCount.defaultProps = {
  active: false,
  className: null,
};

DashboardLayoutContentNavItemCount.propTypes = {
  active: PropTypes.bool,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

export default DashboardLayoutContentNavItemCount;
