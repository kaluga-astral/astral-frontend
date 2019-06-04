import PropTypes from 'prop-types';
import React from 'react';
import { FormSpy } from 'react-final-form';
import { Button } from '@astral-frontend/components';

const FormSubmitButton = ({
  disabled, ButtonComponent, children, ...props
}) => (
  <FormSpy subscription={{ submitting: true }}>
    {({ submitting }) => (
      <ButtonComponent disabled={disabled} fetching={submitting} type="submit" {...props}>
        {children}
      </ButtonComponent>
    )}
  </FormSpy>
);

FormSubmitButton.defaultProps = {
  disabled: false,
  className: null,
  ButtonComponent: Button,
};

FormSubmitButton.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  ButtonComponent: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default FormSubmitButton;
