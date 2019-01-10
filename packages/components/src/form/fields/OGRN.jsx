import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';
import * as rules from '../../../validations/rules';

const OGRNField = props => (
  <TextField
    inputProps={{ maxLength: 15 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={rules.mustBeOGRN}
    {...props}
  />
);

OGRNField.defaultProps = {
  name: 'ogrn',
  label: 'ОГРН',
  placeholder: null,
};

OGRNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OGRNField;
