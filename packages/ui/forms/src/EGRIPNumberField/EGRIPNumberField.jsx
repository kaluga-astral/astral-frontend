import PropTypes from 'prop-types';
import React from 'react';
import { mustBeEGRIPNumber } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const EGRIP_NUMBER_MASK = [
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const removeSpecialSymbols = value => value.replace(/[^\d\s]/g, '');
// Поле для указания серии и номера выдачи сведетельства из ЕГРИП
const EGRIPNumberField = props => (
  <MaskField
    parse={removeSpecialSymbols}
    validate={mustBeEGRIPNumber}
    mask={EGRIP_NUMBER_MASK}
    {...props}
  />
);

EGRIPNumberField.defaultProps = {
  name: 'egripNumber',
  label: 'Серия и номер свидетельства',
};

EGRIPNumberField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default EGRIPNumberField;
