import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      fontSize: theme.typography.pxToRem(32),
      margin: '0 15px',
    },
  }),
  {
    name: 'DashboardLayoutActionButtonIcon',
  },
);

const DashboardLayoutActionButtonIcon = ({ className, Icon, ...props }) => {
  const classes = useStyles();

  return <Icon className={cn(className, classes.root)} {...props} />;
};

DashboardLayoutActionButtonIcon.defaultProps = {
  className: null,
};

DashboardLayoutActionButtonIcon.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
};

export default DashboardLayoutActionButtonIcon;
