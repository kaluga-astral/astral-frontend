import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'react-final-form';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import { compose } from '../../../../validations/helpers';
import * as rules from '../../../../validations/rules';

const RangeField = ({
  disabled,
  required,
  fullWidth,
  name,
  label,
  className,
  minValue,
  maxValue,
}) => (
  <Field name={name} validate={compose(required ? rules.required : noop)}>
    {({ input: { value, onChange, ...input }, meta }) => (
      <FormControl
        disabled={disabled}
        fullWidth={fullWidth}
        required={required}
        margin="normal"
        className={className}
        error={meta.touched && !meta.valid}
      >
        {label && <InputLabel>{label}</InputLabel>}
        <InputRange
          {...input}
          value={value || minValue}
          minValue={minValue}
          maxValue={maxValue}
          onChange={onChange}
        />
        {(meta.error || meta.submitError) &&
          meta.touched && <FormHelperText>{meta.error || meta.submitError}</FormHelperText>}
      </FormControl>
    )}
  </Field>
);

RangeField.defaultProps = {
  fullWidth: true,
  disabled: false,
  required: false,
  label: null,
  className: null,
};

RangeField.propTypes = {
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default RangeField;
