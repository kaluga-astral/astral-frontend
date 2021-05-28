import PropTypes from 'prop-types';
import React from 'react';
import { mustBeCheckingAccount } from '@astral-frontend/validations';

import TextField from '../TextField';

const СheckingAccountField = ({ bic, ...props }) => (
  <TextField
    inputProps={{ maxLength: 20 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={bic ? mustBeCheckingAccount(bic) : undefined}
    {...props}
  />
);

СheckingAccountField.defaultProps = {
  name: 'сheckingAccount',
  label: 'Расчётный счёт',
  bic: null,
};

СheckingAccountField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  bic: PropTypes.string,
};

export default СheckingAccountField;
