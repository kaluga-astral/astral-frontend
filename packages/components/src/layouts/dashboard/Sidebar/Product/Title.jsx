import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const DashboardSidebarProductTitle = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

DashboardSidebarProductTitle.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
};

export default withStyles(theme => ({
  root: {
    flex: 1,
    lineHeight: '25px',
    fontSize: '16px',
    fontWeight: '300',
    color: theme.palette.common.white,
  },
}))(DashboardSidebarProductTitle);
