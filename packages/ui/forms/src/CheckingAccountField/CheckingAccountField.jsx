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

const СheckingAccountField = ({ bik, ...props }) => (
  <MaskField
    validate={mustBeCheckingAccount(bik)}
    mask={CHECKING_ACCOUNT_MASK}
    {...props}
  />
);

СheckingAccountField.defaultProps = {
  name: 'сheckingAccount',
  label: 'Расчётный счёт',
};

СheckingAccountField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  bik: PropTypes.string.isRequired,
};

export default СheckingAccountField;
