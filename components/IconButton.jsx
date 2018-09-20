import React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const IconButton = props => <MuiIconButton {...props} />;

export default withStyles({
  root: {
    width: '25px',
    height: '25px',
    lineHeight: '25px',
    fontSize: '1em',
  },
})(IconButton);
