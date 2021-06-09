import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      margin: theme.spacing(3, 4),
      flexShrink: 0,
    },
  }),
  {
    name: 'DashboardLayoutAsideNavLinkIcon',
  },
);

const DashboardLayoutAsideNavLinkIcon = ({
  component: Component,
  ...props
}) => {
  const classes = useStyles();

  return <Component {...props} className={classes.root} />;
};

DashboardLayoutAsideNavLinkIcon.propTypes = {
  component: PropTypes.PropTypes.func.isRequired,
};

export default DashboardLayoutAsideNavLinkIcon;
