import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';
import { mustBePhone } from '@astral-frontend/validations';

import TextField from '../TextField';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '+',
        7,
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
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const PhoneField = props => (
  <TextField
    parse={value => value.replace(/(-|\(|\)| )/g, '')}
    validate={mustBePhone}
    inputComponent={TextMaskCustom}
    {...props}
  />
);

PhoneField.defaultProps = {
  name: 'phone',
  label: 'Телефон',
  placeholder: null,
};

PhoneField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PhoneField;
