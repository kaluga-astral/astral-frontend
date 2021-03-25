import PropTypes from 'prop-types';
import React from 'react';
import { mustBeSNILS } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const SNILS_MASK = '999-999-999 99';

const SNILSField = props => (
  <MaskField
    parse={v => v}
    validate={mustBeSNILS}
    mask={SNILS_MASK}
    {...props}
  />
);

SNILSField.defaultProps = {
  name: 'snils',
  label: 'СНИЛС',
  placeholder: '000-000-000 00',
};

SNILSField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SNILSField;
