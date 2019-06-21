import React from 'react';
import PropTypes from 'prop-types';
import { MaskField } from '@astral-frontend/components';

import TextField from '../TextField';

const InputTextMask = props => (
  <TextField
    render={MaskField}
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
