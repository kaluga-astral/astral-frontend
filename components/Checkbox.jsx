import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const Checkbox = props => <MuiCheckbox {...props} />;

export default withStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}))(Checkbox);
