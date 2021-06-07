import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import TextField from '../TextField';

const MaskField = ({
  placeholder,
  alwaysShowMask,
  beforeMaskedValueChange,
  formatChars,
  maskChar,
  mask,
  InputProps,
  ...props
}) => (
  <TextField
    {...props}
    variant="outlined"
    InputProps={{ inputComponent: InputMask, ...InputProps }}
    /* eslint-disable-next-line react/jsx-no-duplicate-props */
    inputProps={{
      placeholder,
      alwaysShowMask,
      beforeMaskedValueChange,
      maskChar,
      formatChars,
      mask,
    }}
  />
);

MaskField.defaultProps = {
  alwaysShowMask: false,
  placeholder: null,
  maskChar: '\u2000',
  InputProps: {},
  permanents: undefined,
  formatChars: undefined,
  variant: 'outlined',
  beforeMaskedValueChange: undefined,
};

MaskField.propTypes = {
  mask: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maskChar: PropTypes.string,
  alwaysShowMask: PropTypes.bool,
  formatChars: PropTypes.objectOf(PropTypes.string),
  permanents: PropTypes.arrayOf(PropTypes.number),
  InputProps: PropTypes.objectOf(PropTypes.any),
  beforeMaskedValueChange: PropTypes.func,
};

export default MaskField;
