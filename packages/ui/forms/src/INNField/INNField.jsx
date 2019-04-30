import PropTypes from 'prop-types';
import React from 'react';
import { mustBeINN } from '@astral-frontend/validations';

import TextField from '../TextField';

const INNField = ({ noValidate, ...props }) => (
  <TextField
    inputProps={{ maxLength: 12 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={!noValidate && mustBeINN}
    {...props}
  />
);

INNField.defaultProps = {
  name: 'inn',
  label: 'ИНН',
  placeholder: null,
};

INNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default INNField;
