import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';

const Form = ({
  children,
  component: Component,
  mutators,
  decorators,
  form,
  subscription,
  initialValues,
  initialValuesEqual,
  onSubmit,
  ...props
}) => (
  <FinalForm
    {...props}
    mutators={{
      ...mutators,
      setValue: ([field, value], state, { changeValue }) => {
        changeValue(state, field, () => value);
      },
    }}
    decorators={decorators}
    form={form}
    subscription={subscription}
    initialValues={initialValues}
    initialValuesEqual={initialValuesEqual}
    onSubmit={onSubmit}
  >
    {formRenderProps => (
      <Component {...props} noValidate onSubmit={formRenderProps.handleSubmit}>
        {children(formRenderProps)}
      </Component>
    )}
  </FinalForm>
);

Form.defaultProps = {
  className: null,
  mutators: undefined,
  decorators: undefined,
  form: undefined,
  subscription: undefined,
  initialValues: undefined,
  initialValuesEqual: undefined,
  component: 'form',
};

Form.propTypes = {
  className: PropTypes.string,
  mutators: PropTypes.shape({}),
  decorators: PropTypes.shape({}),
  form: PropTypes.shape({}),
  subscription: PropTypes.shape({}),
  initialValues: PropTypes.shape({}),
  initialValuesEqual: PropTypes.func,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape(),
  ]),
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
