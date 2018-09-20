import React from 'react';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';

const DialogActions = props => <MuiDialogActions {...props} />;

export default withStyles({
  root: {
    margin: 0,
    padding: '15.5px 30px 30px',
  },
})(DialogActions);
