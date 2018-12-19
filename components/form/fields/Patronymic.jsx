import PropTypes from 'prop-types';
import React from 'react';

import TextField from './base/Text';

const PatronymicField = props => <TextField {...props} />;

PatronymicField.defaultProps = {
  name: 'patronymic',
  label: 'Отчество',
  placeholder: null,
};

PatronymicField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PatronymicField;
