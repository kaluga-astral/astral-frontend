import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Badge = ({ children, classes }) => <div className={classes.root}>{children}</div>;

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '20px',
    borderRadius: '10px',
    fontWeight: 500,
    fontSize: '14px',
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
}))(Badge);
