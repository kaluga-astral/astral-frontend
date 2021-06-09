import PropTypes from 'prop-types';
import React from 'react';
import { mustBeRegNumberFSS } from '@astral/validations';

import TextField from '../TextField';

const RegNumberFssField = props => (
  <TextField
    inputProps={{ maxLength: 15 }}
    parse={value => value.replace(/(-|\(|\)| )/g, '')}
    validate={mustBeRegNumberFSS}
    {...props}
  />
);

RegNumberFssField.defaultProps = {
  name: 'regNumberFss',
  label: 'Рег. номер ФСС',
  placeholder: null,
};

RegNumberFssField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default RegNumberFssField;
