import PropTypes from 'prop-types';
import React from 'react';
import { mustBeINN } from '@astral-frontend/validations';

import TextField from '../TextField';

const INNField = ({ maxLength, noValidate, ...props }) => (
  <TextField
    inputProps={{ maxLength }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={!noValidate && mustBeINN}
    {...props}
  />
);

INNField.defaultProps = {
  noValidate: false,
  name: 'inn',
  label: 'ИНН',
  maxLength: 12,
  placeholder: null,
};

INNField.propTypes = {
  noValidate: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default INNField;
