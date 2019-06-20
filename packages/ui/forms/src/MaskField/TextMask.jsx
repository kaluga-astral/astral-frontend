import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const TextMask = ({
  inputRef, ...props
}) => (
  <MaskedInput
    {...props}
    ref={(ref) => {
      inputRef(ref ? ref.inputElement : null);
    }}
  />
);

TextMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default TextMask;
