import PropTypes from 'prop-types';
import React from 'react';
import { noop } from 'lodash-es';
import { Field } from 'react-final-form';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

import { compose } from '../../../../validations/helpers';
import * as rules from '../../../../validations/rules';

import FormControl from './FormControl';

const FormField = ({
  required,
  children,
  name,
  validate,
  label,
  placeholder,
  parse,
  inputProps,
  multiline,
  ...props
}) => (
  <Field
    allowNull={!required}
    name={name}
    parse={parse}
    validate={
      required
        ? compose(
          rules.required,
          validate,
        )
        : validate
    }
  >
    {({ meta, input }) => (
      <FormControl required={required} error={meta.touched && !meta.valid} {...props}>
        {label && <InputLabel>{label}</InputLabel>}
        {children({
          meta,
          input: Object.assign({}, input, { multiline, placeholder, inputProps }),
        })}
        {(meta.error || meta.submitError)
          && meta.touched && <FormHelperText>{meta.error || meta.submitError}</FormHelperText>}
      </FormControl>
    )}
  </Field>
);

FormField.defaultProps = {
  disabled: false,
  required: false,
  fullWidth: true,
  margin: 'normal',
  className: null,
  validate: noop,
  parse: null,
  label: null,
  placeholder: null,
  inputProps: {},
};

FormField.propTypes = {
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  margin: PropTypes.string,
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  parse: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputProps: PropTypes.shape(),
  children: PropTypes.func.isRequired,
};

export default FormField;
