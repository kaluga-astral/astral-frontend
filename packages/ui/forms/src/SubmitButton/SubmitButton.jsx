import PropTypes from 'prop-types';
import React from 'react';
import { FormSpy } from 'react-final-form';
import { Button } from '@astral-frontend/components';

const FormSubmitButton = ({
  disabled, component: Component, children, ...props
}) => (
  <FormSpy subscription={{ submitting: true }}>
    {({ submitting }) => (
      <Component disabled={disabled} loading={submitting} type="submit" {...props}>
        {children}
      </Component>
    )}
  </FormSpy>
);

FormSubmitButton.defaultProps = {
  disabled: false,
  className: null,
  component: Button,
};

FormSubmitButton.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default FormSubmitButton;
