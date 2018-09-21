import React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const IconButton = props => <MuiIconButton {...props} />;

export default withStyles({
  root: {
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    fontSize: '18px',
  },
})(IconButton);
