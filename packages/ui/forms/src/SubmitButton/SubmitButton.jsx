import PropTypes from 'prop-types';
import React from 'react';
import { FormSpy } from 'react-final-form';
import { Button, CircularProgress } from '@astral-frontend/components';

const FormSubmitButton = ({ disabled, children, ...props }) => (
  <FormSpy subscription={{ submitting: true }}>
    {({ submitting }) => (
      <Button disabled={disabled || submitting} type="submit" {...props}>
        {submitting ? <CircularProgress color="inherit" size={20} /> : children}
      </Button>
    )}
  </FormSpy>
);

FormSubmitButton.defaultProps = {
  disabled: false,
  className: null,
};

FormSubmitButton.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormSubmitButton;
