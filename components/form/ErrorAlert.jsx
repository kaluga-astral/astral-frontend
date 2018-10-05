import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const FormErrorAlert = ({ classes, ...props }) => <div className={classes.root} {...props} />;

export default withStyles({
  root: {
    margin: '12.5px 0',
    fontWeight: 300,
    color: '#c00000',
  },
})(FormErrorAlert);
