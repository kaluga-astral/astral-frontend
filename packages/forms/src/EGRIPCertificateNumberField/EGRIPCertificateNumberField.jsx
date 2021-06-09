import PropTypes from 'prop-types';
import React from 'react';
import { mustBeEGRIPCertificateNumber } from '@astral/validations';

import MaskField from '../MaskField';

const EGRIP_CERTIFICATE_NUMBER_MASK = '99 999999999';

const parse = v => v;

// Поле для указания серии и номера выдачи свидетельства из ЕГРИП
const EGRIPCertificateNumberField = props => (
  <MaskField
    parse={parse}
    validate={mustBeEGRIPCertificateNumber}
    mask={EGRIP_CERTIFICATE_NUMBER_MASK}
    {...props}
  />
);

EGRIPCertificateNumberField.defaultProps = {
  name: 'egripCertificateNumber',
  placeholder: '99 999999999',
  label: 'Серия и номер свидетельства о регистрации ИП',
};

EGRIPCertificateNumberField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default EGRIPCertificateNumberField;
