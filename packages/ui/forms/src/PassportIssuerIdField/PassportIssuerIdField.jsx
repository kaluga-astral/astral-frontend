import PropTypes from 'prop-types';
import React from 'react';
import { mustBePassportIssuerId } from '@astral-frontend/validations';

import TextField from '../TextField';
import PassportIssuerIdFieldMask from './PassportIssuerIdFieldMask';

const PassportIssuerIdField = props => (
  <TextField
    validate={mustBePassportIssuerId}
    parse={value => value.replace(/(-|\(|\)| )/g, '')}
    InputProps={{
      inputComponent: PassportIssuerIdFieldMask,
    }}
    {...props}
  />
);

PassportIssuerIdField.defaultProps = {
  name: 'issuerId',
  label: 'Код подразделения',
  placeholder: null,
};

PassportIssuerIdField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PassportIssuerIdField;
