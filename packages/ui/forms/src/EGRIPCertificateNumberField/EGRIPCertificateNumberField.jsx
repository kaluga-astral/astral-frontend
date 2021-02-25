import PropTypes from 'prop-types';
import React from 'react';
import { mustBeEGRIPCertificateNumber } from '@astral-frontend/validations';
import { removeSpecialSymbols } from '../utils';

import MaskField from '../MaskField';

const EGRIP_CERTIFICATE_NUMBER_MASK = [
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
];

// Поле для указания серии и номера выдачи сведетельства из ЕГРИП
const EGRIPCertificateNumberField = props => (
  <MaskField
    parse={removeSpecialSymbols}
    validate={mustBeEGRIPCertificateNumber}
    mask={EGRIP_CERTIFICATE_NUMBER_MASK}
    {...props}
  />
);

EGRIPCertificateNumberField.defaultProps = {
  name: 'egripCertificateNumber',
  label: 'Серия и номер свидетельства',
};

EGRIPCertificateNumberField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default EGRIPCertificateNumberField;
