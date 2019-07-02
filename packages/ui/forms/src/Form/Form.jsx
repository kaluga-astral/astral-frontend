import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';

const Form = ({ children, className, ...props }) => (
  <FinalForm {...props}>
    {formRenderProps => (
      <form noValidate className={className} onSubmit={formRenderProps.handleSubmit}>
        {children(formRenderProps)}
      </form>
    )}
  </FinalForm>
);

Form.defaultProps = {
  className: null,
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
