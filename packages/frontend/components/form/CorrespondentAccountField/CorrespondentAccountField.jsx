import PropTypes from 'prop-types';
import React from 'react';
import { mustBeCorrespondentAccount } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const CORRESPONDENT_ACCOUNT_MASK = new Array(20).fill('9').join('');

const CorrespondentAccountField = ({ bik, ...props }) => (
  <MaskField
    validate={mustBeCorrespondentAccount(bik)}
    mask={CORRESPONDENT_ACCOUNT_MASK}
    {...props}
  />
);

CorrespondentAccountField.defaultProps = {
  name: 'сorrespondentAccount',
  label: 'Корреспондентский счёт',
};

CorrespondentAccountField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  bik: PropTypes.string.isRequired,
};

export default CorrespondentAccountField;
