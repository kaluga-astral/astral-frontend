import React from 'react';
import PropTypes from 'prop-types';

import Field from '../Field';

const FormTextField = props => <Field {...props} />;

FormTextField.defaultProps = {
  type: 'text',
};

FormTextField.propTypes = {
  type: PropTypes.string,
};

export default FormTextField;
