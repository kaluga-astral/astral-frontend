import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';

const PassportIssuerIdFieldMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
};

PassportIssuerIdFieldMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default PassportIssuerIdFieldMask;
