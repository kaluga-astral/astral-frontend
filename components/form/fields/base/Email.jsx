import { noop } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'react-final-form';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { compose } from '../../../../validations/helpers';
import * as rules from '../../../../validations/rules';

import FormControl from '../Field/FormControl';

const EmailField = ({
  fullWidth, disabled, required, name, label, placeholder,
}) => (
  <Field name={name} validate={compose(required ? rules.required : noop)}>
    {({ input, meta }) => (
      <FormControl
        margin="normal"
        fullWidth={fullWidth}
        disabled={disabled}
        error={meta.touched && !meta.valid}
        required={required}
      >
        {label && <InputLabel>{label}</InputLabel>}
        <Input type="tel" {...input} placeholder={placeholder} />
        {(meta.error || meta.submitError)
          && meta.touched && <FormHelperText>{meta.error || meta.submitError}</FormHelperText>}
      </FormControl>
    )}
  </Field>
);

EmailField.defaultProps = {
  fullWidth: true,
  disabled: false,
  required: false,
  name: 'email',
  label: null,
  placeholder: 'Введите email',
};

EmailField.propTypes = {
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default EmailField;
