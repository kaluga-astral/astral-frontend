import React from 'react';
import PropTypes from 'prop-types';
import { MaskField } from '@astral-frontend/components';

import TextField from '../TextField';

const removeSpaceSymbols = value => value.replace(/\s/g, '');

const InputTextMask = props => (
  <TextField
    render={MaskField}
    {...props}
  />
);

InputTextMask.defaultProps = {
  label: null,
  placeholder: null,
  pipe: undefined,
  parse: removeSpaceSymbols,
  placeholderChar: '\u2000',
};

InputTextMask.propTypes = {
  mask: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
    ),
    PropTypes.func,
  ]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderChar: PropTypes.string,
  parse: PropTypes.func,
  pipe: PropTypes.func,
};

export default InputTextMask;
