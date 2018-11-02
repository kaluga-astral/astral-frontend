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
  label: null,
  placeholder: null,
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextField;
