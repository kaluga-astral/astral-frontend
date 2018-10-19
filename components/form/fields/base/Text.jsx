import PropTypes from 'prop-types';
import React from 'react';
import Input from '@material-ui/core/Input';

import Field from '../Field';

const TextField = ({ multiline, ...props }) => (
  <Field {...props} type="text">
    {({ input }) => <Input multiline={multiline} {...input} />}
  </Field>
);

TextField.defaultProps = {
  placeholder: 'Введите текст',
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default TextField;
