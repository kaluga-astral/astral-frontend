import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';
import * as rules from '../../../validations/rules';

const RegNumberFSSField = props => (
  <TextField
    inputProps={{ maxLength: 15 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={rules.mustBeRegNumberFSS}
    {...props}
  />
);

RegNumberFSSField.defaultProps = {
  name: 'regNumberFss',
  label: 'Рег. номер ФСС',
  placeholder: null,
};

RegNumberFSSField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default RegNumberFSSField;
