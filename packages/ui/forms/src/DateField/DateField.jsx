import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
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
  const validateFunc = useCallback((value, values) => {
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
      render={({ value, error, ...fieldProps }) => (
        <DatePicker
          {...fieldProps}
          error={Boolean(error)}
          minDate={minDate}
          maxDate={maxDate}
          value={value || null}
        />
      )}
    />
  );
};

FormDateField.propTypes = {
  name: PropTypes.string.isRequired,
  viewFormat: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  validate: PropTypes.func,
  inputProps: PropTypes.shape({
    min: PropTypes.string,
    max: PropTypes.string,
  }),
};

export default FormDateField;
