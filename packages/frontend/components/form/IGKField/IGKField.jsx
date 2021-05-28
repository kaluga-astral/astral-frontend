import PropTypes from 'prop-types';
import React from 'react';
import { mustBeIGK } from '@astral-frontend/validations';

import TextField from '../TextField';

const IGKField = props => (
  <TextField
    inputProps={{ maxLength: 25 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={mustBeIGK}
    {...props}
  />
);

IGKField.defaultProps = {
  name: 'governmentContractInfo',
  label: 'Идентификатор гос. контракта',
  placeholder: null,
};

IGKField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default IGKField;
