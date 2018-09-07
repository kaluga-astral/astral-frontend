import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const UnhandledError = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
})(({ classes }) => <pre className={classes.root}>An error has occurred</pre>);

export default UnhandledError;
