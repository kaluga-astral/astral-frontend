import React from 'react';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';

const DialogContent = props => <MuiDialogContent {...props} />;

export default withStyles({
  root: {
    padding: '15px 30px',
    '&:first-child': {
      paddingTop: '25px',
    },
  },
})(DialogContent);
