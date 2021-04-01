import PropTypes from 'prop-types';
import React from 'react';
import { mustBePhone } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const PHONE_MASK = [
  '+',
  '7',
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

const removeSpecialSymbols = value => value.replace(/\(|\)|-|\s/g, '');

const PhoneField = props => (
  <MaskField
    parse={removeSpecialSymbols}
    validate={mustBePhone}
    mask={PHONE_MASK}
    {...props}
  />
);

PhoneField.defaultProps = {
  name: 'phone',
  label: 'Номер телефона',
  placeholder: '+7(   )   -  -  ',
};

PhoneField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PhoneField;
