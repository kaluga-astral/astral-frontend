import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const UnhandledError = ({ classes }) => <pre className={classes.root}>An error has occurred</pre>;

UnhandledError.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fill-available',
    height: 'fill-available',
    maxWidth: '100%',
    maxHeight: '100%',
  },
})(UnhandledError);
