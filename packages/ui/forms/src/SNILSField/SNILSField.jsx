import PropTypes from 'prop-types';
import React from 'react';
import { mustBeSNILS } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const SNILS_MASK = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, ' ', /\d/, /\d/];

const SNILSField = props => (
  <MaskField
    validate={mustBeSNILS}
    mask={SNILS_MASK}
    {...props}
  />
);

SNILSField.defaultProps = {
  name: 'snils',
  label: 'СНИЛС',
  placeholder: '   -   -      ',
};

SNILSField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SNILSField;
