import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';

import AutoSave from './AutoSave';

const Form = ({
  autoSave, children, className, classes, onSubmit, ...props
}) => (
  <FinalForm {...props} onSubmit={onSubmit}>
    {({ handleSubmit, ...formRenderProps }) => (
      <form noValidate onSubmit={handleSubmit}>
        {autoSave && <AutoSave />}
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
