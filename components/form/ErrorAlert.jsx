import React from 'react';
import { FormSpy } from 'react-final-form';

import { withStyles } from '@material-ui/core/styles';

const FormErrorAlert = ({ classes, ...props }) => (
  <FormSpy subscription={{ submitError: true }}>
    {({ submitError }) => (
      <div className={classes.root} {...props}>
        {submitError}
      </div>
    )}
  </FormSpy>
);

export default withStyles({
  root: {
    margin: '12.5px 0',
    fontWeight: 300,
    color: '#c00000',
  },
})(FormErrorAlert);
