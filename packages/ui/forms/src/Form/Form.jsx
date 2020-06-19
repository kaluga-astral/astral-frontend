import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';

const Form = ({
  children,
  keepDirtyOnReinitialize,
  component: Component,
  mutators,
  decorators,
  validate,
  form,
  subscription,
  initialValues,
  initialValuesEqual,
  onSubmit,
  ...props
}) => (
  <FinalForm
    {...props}
    keepDirtyOnReinitialize={keepDirtyOnReinitialize}
    mutators={{
      ...mutators,
      setValue: ([field, value], state, { changeValue }) => {
        changeValue(state, field, () => value);
      },
    }}
    validate={validate}
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
  validate: undefined,
  subscription: undefined,
  initialValues: undefined,
  initialValuesEqual: undefined,
  keepDirtyOnReinitialize: undefined,
  component: 'form',
};

Form.propTypes = {
  className: PropTypes.string,
  keepDirtyOnReinitialize: PropTypes.bool,
  mutators: PropTypes.shape({}),
  decorators: PropTypes.arrayOf(PropTypes.func),
  form: PropTypes.shape({}),
  subscription: PropTypes.shape({}),
  initialValues: PropTypes.shape({}),
  initialValuesEqual: PropTypes.func,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape(),
  ]),
  validate: PropTypes.func,
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
