import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';

const SurnameField = props => <TextField {...props} />;

SurnameField.defaultProps = {
  name: 'surname',
  label: 'Фамилия',
  placeholder: null,
};

SurnameField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SurnameField;
