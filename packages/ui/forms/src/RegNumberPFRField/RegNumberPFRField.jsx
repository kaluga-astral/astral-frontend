import PropTypes from 'prop-types';
import React from 'react';
import { mustBeRegNumberPFR } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const REG_NUMBER_PFR_MASK = [
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
const removeSpecialSymbols = value => value.replace(/-/g, '');

const RegNumberPFRField = props => (
  <MaskField
    parse={removeSpecialSymbols}
    validate={mustBeRegNumberPFR}
    mask={REG_NUMBER_PFR_MASK}
    {...props}
  />
);

RegNumberPFRField.defaultProps = {
  name: 'regNumberPfr',
  label: 'Рег. номер ПФР',
  placeholder: '000-000-000000',
};

RegNumberPFRField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default RegNumberPFRField;
