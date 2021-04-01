import PropTypes from 'prop-types';
import React from 'react';
import { mustBeEGRIPCertificateNumber } from '@astral-frontend/validations';

import { removeSpecialSymbols } from '../utils';
import MaskField from '../MaskField';

const EGRIP_CERTIFICATE_NUMBER_MASK = '99 999999999';

// Поле для указания серии и номера выдачи свидетельства из ЕГРИП
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
