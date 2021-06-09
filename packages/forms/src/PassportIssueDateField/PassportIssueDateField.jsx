import PropTypes from 'prop-types';
import React from 'react';
// import { mustBePassportSeries } from '@astral/validations';

import DateField from '../DateField';

const PassportIssueDateField = props => (
  <DateField
    // validate={mustBePassportSeries}
    {...props}
  />
);

PassportIssueDateField.defaultProps = {
  name: 'issueDate',
  label: 'Дата выдачи',
  placeholder: null,
};

PassportIssueDateField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PassportIssueDateField;
