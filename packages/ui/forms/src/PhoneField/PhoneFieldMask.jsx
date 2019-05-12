import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';

const PhoneFieldMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      placeholder="+7(   )   -  -  "
      mask={[
        '+',
        '7',
        '(',
        /\d/,
        /\d/,
        /\d/,
        ')',
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
    />
  );
};

PhoneFieldMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default PhoneFieldMask;
