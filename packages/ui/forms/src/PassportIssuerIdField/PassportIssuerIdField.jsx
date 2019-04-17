import PropTypes from 'prop-types';
import React from 'react';
// import { mustBePassportSeries } from '@astral-frontend/validations';

import TextField from '../TextField';
import PassportIssuerIdFieldMask from './PassportIssuerIdFieldMask';

const PassportIssuerIdField = props => (
  <TextField
    // validate={mustBePassportSeries}
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
