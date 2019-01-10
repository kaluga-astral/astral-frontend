import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';
import * as rules from '../../../validations/rules';

const INNField = props => (
  <TextField
    inputProps={{ maxLength: 12 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={rules.mustBeINN}
    {...props}
  />
);

INNField.defaultProps = {
  name: 'inn',
  label: 'ИНН',
  placeholder: null,
};

INNField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default INNField;
