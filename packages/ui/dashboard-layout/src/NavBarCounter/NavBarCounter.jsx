/* eslint-disable import/no-extraneous-dependencies */
import cn from 'classnames';
import { isEmpty } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

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

  return (
    <Component
      className={cn(classes.root, { [classes.active]: active }, className)}
      {...props}
    >
      <span className={classes.text}>{text}</span>
      {isEmpty(count) && (
        <NavBarCounterCount active={active} count={count} loading={loading} />
      )}
    </Component>
  );
};

DashboardLayoutNavCounter.defaultProps = {
  loading: false,
  active: false,
  count: null,
  className: null,
  component: 'div',
};

DashboardLayoutNavCounter.propTypes = {
  loading: PropTypes.bool,
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  count: PropTypes.number,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export default DashboardLayoutNavCounter;
