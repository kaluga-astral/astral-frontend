import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';
import * as rules from '../../../validations/rules';

const PassportNumber = props => (
  <TextField
    inputProps={{ maxLength: 6 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={rules.mustBePassportNumber}
    {...props}
  />
);

PassportNumber.defaultProps = {
  label: 'Номер',
  placeholder: null,
};

PassportNumber.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default PassportNumber;
