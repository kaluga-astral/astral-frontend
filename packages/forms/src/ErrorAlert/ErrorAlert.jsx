import PropTypes from 'prop-types';
import React from 'react';
import { FormSpy } from 'react-final-form';
import { withStyles } from '@astral/styles';

const FormErrorAlert = ({ classes }) => (
  <FormSpy subscription={{ submitError: true }}>
    {({ submitError }) =>
      submitError ? <div className={classes.root}>{submitError}</div> : null
    }
  </FormSpy>
);

FormErrorAlert.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(theme => ({
  root: {
    margin: '12.5px 0',
    fontWeight: 300,
    color: theme.palette.error.main,
  },
}))(FormErrorAlert);
