import PropTypes from 'prop-types';
import React from 'react';
import { mustBeKPP } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const KPP_MASK = '9999KK999';

const KPPField = props => (
  <MaskField
    {...props}
    mask={KPP_MASK}
    validate={mustBeKPP}
    formatChars={{
      K: '[0-9A-Z]',
      9: '[0-9]',
    }}
  />
);

KPPField.defaultProps = {
  name: 'kpp',
  label: 'КПП',
};

KPPField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default KPPField;
