import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const SidebarListItemIcon = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

SidebarListItemIcon.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25px',
    height: '25px',
    marginRight: '15px',
    fontSize: 'inherit',
  },
})(SidebarListItemIcon);
