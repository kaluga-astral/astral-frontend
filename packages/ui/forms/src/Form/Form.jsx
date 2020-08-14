import PropTypes from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';

import { Box } from '@astral-frontend/components';

const Form = ({
  children,
  keepDirtyOnReinitialize,
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
      <Box
        {...props}
        component="form"
        noValidate
        onSubmit={formRenderProps.handleSubmit}
      >
        {children(formRenderProps)}
      </Box>
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
  validate: PropTypes.func,
  children: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
