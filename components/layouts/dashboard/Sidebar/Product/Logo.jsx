import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const DashboardSidebarProductLogo = ({ classes }) => (
  <svg fill="white" viewBox="0 0 25 25" className={classes.root}>
    <rect width="25" height="25" />
  </svg>
);

DashboardSidebarProductLogo.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {
    width: '25px',
    height: '25px',
    marginRight: '15px',
  },
})(DashboardSidebarProductLogo);
