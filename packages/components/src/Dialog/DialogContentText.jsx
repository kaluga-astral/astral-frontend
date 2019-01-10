import React from 'react';
import MuiDialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';

const DialogContentText = props => <MuiDialogContentText {...props} />;

export default withStyles({
  root: {},
})(DialogContentText);
