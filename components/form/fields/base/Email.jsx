import PropTypes from 'prop-types';
import React from 'react';
import Input from '@material-ui/core/Input';

import Field from '../Field';

const EmailField = props => (
  <Field {...props}>{({ input }) => <Input type="email" {...input} />}</Field>
);

EmailField.defaultProps = {
  placeholder: 'Введите email',
};

EmailField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default EmailField;
