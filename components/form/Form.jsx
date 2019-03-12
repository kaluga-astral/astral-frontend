import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm, FormSpy } from 'react-final-form';

import AutoSave from './AutoSave';

const Form = ({
  autoSave,
  children,
  className,
  onSubmit,
  onSubmitSuccess,
  onSubmitFailure,
  ...props
}) => {
  const handleSubmitStateChange = ({ submitSucceeded, submitFailed }) => {
    if (submitSucceeded && onSubmitSuccess) {
      onSubmitSuccess();
    }
    if (submitFailed && onSubmitFailure) {
      onSubmitFailure();
    }
  };

  return (
    <FinalForm {...props} onSubmit={onSubmit}>
      {({ handleSubmit, ...formRenderProps }) => (
        <form noValidate className={className} onSubmit={handleSubmit}>
          {autoSave && <AutoSave />}
          <FormSpy
            subscription={{ submitSucceeded: true, submitFailed: true }}
            onChange={handleSubmitStateChange}
          />
          {children(formRenderProps)}
        </form>
      )}
    </FinalForm>
  );
};

Form.defaultProps = {
  autoSave: false,
  className: null,
  onSubmitSuccess: null,
  onSubmitFailure: null,
};

Form.propTypes = {
  autoSave: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func,
  onSubmitFailure: PropTypes.func,
};

export default Form;
