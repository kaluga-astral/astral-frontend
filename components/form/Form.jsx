import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';

import { FORM_ERROR } from '../../constants/form';
import AutoSave from './AutoSave';

const submitForm = (formState, onSubmitSuccess, onSubmitFailure) => (promise) => {
  promise.then((response) => {
    if (response && response[FORM_ERROR]) {
      onSubmitFailure({ ...formState });
    } else {
      onSubmitSuccess({ ...formState });
    }
  });
};

const Form = ({
  autoSave,
  children,
  className,
  classes,
  component: Component,
  onSubmitSuccess,
  onSubmitFailure,
  ...props
}) => (
  <FinalForm {...props}>
    {({ handleSubmit, ...formState }) => (
      <Component
        onSubmit={(event) => {
          submitForm(formState, onSubmitSuccess, onSubmitFailure)(handleSubmit(event));
        }}
      >
        {autoSave && (
          <AutoSave onSubmit={submitForm(formState, onSubmitSuccess, onSubmitFailure)} />
        )}
        {children(formState)}
      </Component>
    )}
  </FinalForm>
);

Form.defaultProps = {
  className: null,
  component: props => <form noValidate {...props} />,
  onSubmitSuccess: () => {},
  onSubmitFailure: () => {},
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  onSubmit: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func,
  onSubmitFailure: PropTypes.func,
};

export default Form;
