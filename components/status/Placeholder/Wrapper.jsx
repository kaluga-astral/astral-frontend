import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const PlaceholderWrapper = ({ classes, ...props }) => <div className={classes.root} {...props} />;

PlaceholderWrapper.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'fill-available',
    minHeight: 'max-content',
    maxHeight: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  status: {},
  message: {
    marginTop: '20px',
    color: '#4e4e4e',
  },
})(PlaceholderWrapper);
