import React from 'react';
import MuiTab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

const Tab = props => <MuiTab {...props} />;

export default withStyles(theme => ({
  root: {
    textTransform: 'initial',
    fontSize: '14px',
    fontWeight: 300,
    color: theme.palette.common.black,
  },
  selected: {
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
}))(Tab);
