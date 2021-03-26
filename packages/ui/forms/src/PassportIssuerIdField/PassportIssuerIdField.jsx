import PropTypes from 'prop-types';
import React from 'react';
import { mustBePassportIssuerId } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const PASSPORT_ISSUER_ID_MASK = '999-999';
const removeSpecialSymbols = value => value.replace(/-/g, '');

const PassportIssuerIdField = props => (
  <MaskField
    validate={mustBePassportIssuerId}
    parse={removeSpecialSymbols}
    mask={PASSPORT_ISSUER_ID_MASK}
    {...props}
  />
);

PassportIssuerIdField.defaultProps = {
  name: 'issuerId',
  label: 'Код подразделения',
  placeholder: '000-000',
};

PassportIssuerIdField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PassportIssuerIdField;
