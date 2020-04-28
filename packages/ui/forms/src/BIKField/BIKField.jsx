import PropTypes from 'prop-types';
import React from 'react';
import { mustBeBIK } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const BIK_MASK = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

const BIKField = props => (
  <MaskField {...props} mask={BIK_MASK} validate={mustBeBIK} />
);

BIKField.defaultProps = {
  name: 'bik',
  label: 'БИК',
};

BIKField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default BIKField;
