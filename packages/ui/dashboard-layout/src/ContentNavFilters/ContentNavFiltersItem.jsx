import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      display: 'flex',
      color: 'rgba(29, 63, 102, 0.62)',
      textDecoration: 'none',
    },
    // active: {
    //   color: theme.palette.primary.main,
    //   '& div': {
    //     backgroundColor: theme.palette.primary.main,
    //     color: 'white',
    //   },
    // },
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

const DashboardLayoutContentNavItem = ({ className, text, count }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, className)}>
      <div className={classes.text}>{text}</div>
      <div className={classes.count}>{count}</div>
    </div>
  );
};

DashboardLayoutContentNavItem.defaultProps = {
  className: null,
};

DashboardLayoutContentNavItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default DashboardLayoutContentNavItem;
