import React from 'react';
import MuiRadio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

const Radio = props => <MuiRadio {...props} />;

export default withStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}))(Radio);
