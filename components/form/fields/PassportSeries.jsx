import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';
import * as rules from '../../../validations/rules';

const PassportSeries = props => (
  <TextField
    inputProps={{ maxLength: 4 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={rules.mustBePassportSeries}
    {...props}
  />
);

PassportSeries.defaultProps = {
  label: 'Серия',
  placeholder: null,
};

PassportSeries.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default PassportSeries;
