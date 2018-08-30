import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';
import * as rules from '../../../validations/rules';

const KPPField = props => (
  <TextField
    inputProps={{ maxLength: 12 }}
    parse={value => value.replace(/[^\d]/g, '')}
    validate={rules.mustBeKPP}
    {...props}
  />
);

KPPField.defaultProps = {
  name: 'kpp',
  placeholder: 'Введите КПП абонента',
};

KPPField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default KPPField;
