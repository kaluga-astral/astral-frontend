import React from 'react';
import PropTypes from 'prop-types';

import MaskInput from './MaskInput';
import TextField from '../TextField';

const MaskField = ({
  placeholder,
  placeholderChar,
  mask,
  pipe,
  InputProps,
  ...props
}) => (
  <TextField
    InputProps={{
      inputComponent: MaskInput,
      ...InputProps,
    }}
    // eslint-disable-next-line
    inputProps={{
      mask,
      pipe,
      placeholderChar,
      placeholder,
    }}
    {...props}
  />
);

MaskField.defaultProps = {
  pipe: undefined,
  placeholder: null,
  placeholderChar: '\u2000',
  InputProps: {},
};

MaskField.propTypes = {
  mask: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
    ),
    PropTypes.func,
  ]).isRequired,
  placeholder: PropTypes.string,
  placeholderChar: PropTypes.string,
  InputProps: PropTypes.objectOf(PropTypes.any),
  pipe: PropTypes.func,
};

export default MaskField;
