import PropTypes from 'prop-types';
import React from 'react';
import { mustBePhone } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const PHONE_MASK = '+7(999)999-99-99';

const removeSpecialSymbols = value => value.replace(/\(|\)|-|\s/g, '');

const PhoneField = props => (
  <MaskField
    parse={removeSpecialSymbols}
    validate={mustBePhone}
    mask={PHONE_MASK}
    maskChar={null}
    {...props}
  />
);

PhoneField.defaultProps = {
  name: 'phone',
  label: 'Номер телефона',
};

PhoneField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default PhoneField;
