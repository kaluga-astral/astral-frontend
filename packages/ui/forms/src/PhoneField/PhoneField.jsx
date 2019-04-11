import PropTypes from 'prop-types';
import React from 'react';
import { mustBePhone } from '@astral-frontend/validations';

import PhoneFieldMask from './PhoneFieldMask';
import TextField from '../TextField';

const PhoneField = props => (
  <TextField
    parse={value => value.replace(/\(|\)|-/g, '')}
    validate={mustBePhone}
    InputProps={{
      inputComponent: PhoneFieldMask,
    }}
    {...props}
  />
);

PhoneField.defaultProps = {
  name: 'phone',
  label: 'Номер телефона',
  placeholder: null,
};

PhoneField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PhoneField;
