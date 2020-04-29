import PropTypes from 'prop-types';
import React from 'react';
import { mustBeCheckingAccount } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const CHECKING_ACCOUNT_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const СheckingAccountField = ({ bic, ...props }) => (
  <MaskField
    validate={bic ? mustBeCheckingAccount(bic) : undefined}
    mask={CHECKING_ACCOUNT_MASK}
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
