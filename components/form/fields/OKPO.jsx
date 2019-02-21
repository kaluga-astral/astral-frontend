import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';
import * as rules from '../../../validations/rules';

const OKPOField = props => (
  <TextField
    inputProps={{ maxLength: 14 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={rules.mustBeOKPO}
    {...props}
  />
);

OKPOField.defaultProps = {
  name: 'okpo',
  label: 'ОКПО',
  placeholder: null,
};

OKPOField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OKPOField;
