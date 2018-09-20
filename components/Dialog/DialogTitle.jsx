import React from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

const DialogTitle = props => <MuiDialogTitle {...props} />;

export default withStyles({
  root: {
    borderBottom: '1px solid #ededed',
    padding: '25px',
    fontWeight: 300,
    fontSize: '24px',
  },
})(DialogTitle);
