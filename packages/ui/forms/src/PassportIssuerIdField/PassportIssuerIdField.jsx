import PropTypes from 'prop-types';
import React from 'react';
// import { mustBePassportSeries } from '@astral-frontend/validations';

import TextField from '../TextField';

const PassportIssuerIdField = props => (
  <TextField
    // validate={mustBePassportSeries}
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
