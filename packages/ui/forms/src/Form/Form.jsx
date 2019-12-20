import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';

const Form = ({ children, className, mutators, ...props }) => (
  <FinalForm
    {...props}
    mutators={{
      ...mutators,
      setValue: ([field, value], state, { changeValue }) => {
        changeValue(state, field, () => value);
      },
    }}
  >
    {formRenderProps => (
      <form
        noValidate
        className={className}
        onSubmit={formRenderProps.handleSubmit}
      >
        {children(formRenderProps)}
      </form>
    )}
  </FinalForm>
);

Form.defaultProps = {
  className: null,
  mutators: null,
};

Form.propTypes = {
  className: PropTypes.string,
  mutators: PropTypes.shape({}),
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
