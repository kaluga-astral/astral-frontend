import PropTypes from 'prop-types';
import React from 'react';
import { mustBeRegNumberPFR } from '@astral-frontend/validations';

import TextField from '../TextField';
import RegNumberPFRFieldMask from './RegNumberPFRFieldMask';

const RegNumberPFRField = props => (
  <TextField
    parse={value => value.replace(/(-|\(|\)| )/g, '')}
    validate={mustBeRegNumberPFR}
    InputProps={{
      inputComponent: RegNumberPFRFieldMask,
    }}
    {...props}
  />
);

RegNumberPFRField.defaultProps = {
  name: 'regNumberPfr',
  label: 'Рег. номер ПФР',
  placeholder: null,
};

RegNumberPFRField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default RegNumberPFRField;
