import React from 'react';
import PropTypes from 'prop-types';

import MaskField from './MaskField';
import MuiTextField from '../TextField';

const TextField = ({
  placeholder, placeholderChar, mask, ...props
}) => (
  <MuiTextField
    InputProps={{
      inputComponent: MaskField,
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

TextField.defaultProps = {
  placeholder: null,
  placeholderChar: '\u2000',
};

TextField.propTypes = {
  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
  ).isRequired,
  placeholder: PropTypes.string,
  placeholderChar: PropTypes.string,
};

export default TextField;
