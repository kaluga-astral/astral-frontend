import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField';
import TextMask from './TextMask';

const InputTextMask = ({
  placeholder, placeholderChar, mask, ...props
}) => (
  <TextField
    InputProps={{
      inputComponent: TextMask,
    }}
    // eslint-disable-next-line
    inputProps={{
      mask,
      placeholderChar,
      placeholder,
    }}
    {...props}
  />
);

InputTextMask.defaultProps = {
  label: null,
  placeholder: null,
  placeholderChar: '\u2000',
};

InputTextMask.propTypes = {
  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
  ).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderChar: PropTypes.string,
};

export default InputTextMask;
