import PropTypes from 'prop-types';
import React from 'react';
import { mustBePassportNumber } from '@astral-frontend/validations';

import TextField from '../TextField';

const PassportNumberField = props => (
  <TextField
    inputProps={{ maxLength: 6 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={mustBePassportNumber}
    {...props}
  />
);

PassportNumberField.defaultProps = {
  name: 'number',
  label: 'Номер',
  placeholder: null,
};

PassportNumberField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PassportNumberField;
