import PropTypes from 'prop-types';
import React from 'react';
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';

import * as rules from '../../../../validations/rules';

import Field from '../Field';

const mask = [
  '7',
  ' ',
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

const PhoneField = props => (
  <Field
    {...props}
    parse={value => value.replace(/(-|\(|\)|\+|\+| )/g, '')}
    validate={rules.mustBePhone}
  >
    {({ input }) => (
      <Input
        {...input}
        type="tel"
        inputComponent={({ inputRef, ...other }) => (
          <MaskedInput {...other} ref={inputRef} mask={mask} placeholderChar={'\u2000'} />
        )}
      />
    )}
  </Field>
);

PhoneField.defaultProps = {
  name: 'phone',
  label: 'Телефон',
  placeholder: 'Введите телефон',
};

PhoneField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PhoneField;
