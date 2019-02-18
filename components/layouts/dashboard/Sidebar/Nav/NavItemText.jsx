import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const DashboardSidebarNavItemText = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

DashboardSidebarNavItemText.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
};

export default withStyles({
  root: {
    flexGrow: 1,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})(DashboardSidebarNavItemText);
