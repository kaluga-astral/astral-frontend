import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import ContentNavFiltersItemCount from './ContentNavFiltersItemCount';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      padding: theme.spacing(2.5, 4),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.primary.main,
      '&:not(:last-child)': {
        marginRight: theme.spacing(4),
      },
    },
    active: {
      fontWeight: theme.typography.fontWeightBold,
      backgroundColor: theme.palette.primary.light,
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
    <Component
      className={cn(classes.root, { [classes.active]: active }, className)}
      {...props}
    >
      <span className={classes.text}>{text}</span>
      <ContentNavFiltersItemCount active={active} count={count} />
    </Component>
  );
};

DashboardLayoutContentNavItem.defaultProps = {
  active: false,
  className: null,
  component: 'div',
};

DashboardLayoutContentNavItem.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
  ]),
  className: PropTypes.string,
};

export default DashboardLayoutContentNavItem;
