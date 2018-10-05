import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';

import AutoSave from './AutoSave';

const Form = ({
  autoSave, children, className, classes, component: Component, ...props
}) => (
  <FinalForm {...props}>
    {({ handleSubmit, ...formState }) => (
      <Component onSubmit={handleSubmit}>
        {autoSave && <AutoSave />}
        {children(formState)}
      </Component>
    )}
  </FinalForm>
);

Form.defaultProps = {
  className: null,
  component: props => <form noValidate {...props} />,
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
