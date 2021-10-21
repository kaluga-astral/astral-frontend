import PropTypes from 'prop-types';
import React from 'react';
import {
  composeValidations,
  mustBeDate,
  mustBeDatePeriod,
} from '@astral-frontend/validations';
import { DatePicker } from '@astral-frontend/components';

import Field from '../Field';

const FormDateField = ({
  minDate = new Date('1000-01-01'),
  maxDate = new Date('9999-12-31'),
  validate,
  ...props
}) => {
  const validateFunc = React.useCallback((value, values) => {
    const rules = [mustBeDate];

    if (minDate || maxDate) {
      rules.push(ruleValue =>
        mustBeDatePeriod(String(minDate), ruleValue, String(maxDate)),
      );
    }

    if (validate) rules.push(validate);

    return composeValidations(...rules)(value, values);
  }, []);

  return (
    <Field
      {...props}
      validate={validateFunc}
      render={({ error, meta, helperText: helperTextProp, ...renderProps }) => {
        const isError = meta.touched && meta.invalid;
        const helperText = error || helperTextProp;

        return (
          <DatePicker
            {...props}
            {...renderProps}
            minDate={minDate}
            maxDate={maxDate}
            error={isError}
            helperText={helperText}
          />
        );
      }}
    />
  );
};

FormDateField.propTypes = {
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  validate: PropTypes.func,
};

export default FormDateField;
