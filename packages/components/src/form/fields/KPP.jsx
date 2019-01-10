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
  label: 'КПП',
  placeholder: 'Введите КПП',
};

KPPField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default KPPField;
