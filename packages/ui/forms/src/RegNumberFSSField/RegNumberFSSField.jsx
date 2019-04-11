import PropTypes from 'prop-types';
import React from 'react';
import { mustBeRegNumberFSS } from '@astral-frontend/validations';

import TextField from '../TextField';

const RegNumberFssField = props => (
  <TextField
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
