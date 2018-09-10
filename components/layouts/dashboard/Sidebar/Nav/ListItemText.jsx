import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const SidebarListItemText = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

SidebarListItemText.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
};

export default withStyles({
  root: {
    flex: 1,
    padding: 0,
    fontWeight: 300,
    fontSize: '14px',
  },
})(SidebarListItemText);
