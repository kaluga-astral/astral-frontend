import React from 'react';
import PropTypes from 'prop-types';

import MaskInput from './MaskInput';
import TextField from '../TextField';

const MaskField = ({
  placeholder, placeholderChar, mask, ...props
}) => (
  <TextField
    InputProps={{
      inputComponent: MaskInput,
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

MaskField.defaultProps = {
  placeholder: null,
  placeholderChar: '\u2000',
};

MaskField.propTypes = {
  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
  ).isRequired,
  placeholder: PropTypes.string,
  placeholderChar: PropTypes.string,
};

export default MaskField;
