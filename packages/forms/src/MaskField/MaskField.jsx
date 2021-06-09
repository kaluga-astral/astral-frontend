import React from 'react';
import PropTypes from 'prop-types';
import { MaskField } from '@astral/components';

import TextField from '../TextField';

const removeSpaceSymbols = value => value.replace(/\s/g, '');

const InputTextMask = props => <TextField render={MaskField} {...props} />;

InputTextMask.defaultProps = {
  alwaysShowMask: false,
  label: null,
  placeholder: null,
  parse: removeSpaceSymbols,
  formatChars: undefined,
  maskChar: '\u2000',
};

InputTextMask.propTypes = {
  alwaysShowMask: PropTypes.bool,
  mask: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
    ),
    PropTypes.string,
  ]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  maskChar: PropTypes.string,
  formatChars: PropTypes.objectOf(PropTypes.string),
  parse: PropTypes.func,
};

export default InputTextMask;
