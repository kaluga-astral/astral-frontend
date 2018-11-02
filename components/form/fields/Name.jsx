import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';

const NameField = props => <TextField {...props} />;

NameField.defaultProps = {
  name: 'name',
  label: 'Имя',
  placeholder: null,
};

NameField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default NameField;
