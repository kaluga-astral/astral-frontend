import React from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

const Dialog = props => <MuiDialog {...props} />;

export default withStyles({
  root: {},
  paper: {
    borderRadius: '2px',
  },
})(Dialog);
