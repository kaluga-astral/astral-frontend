import PropTypes from 'prop-types';
import React from 'react';
import Input from '@material-ui/core/Input';

import Field from '../Field';

const TextField = props => (
  <Field {...props}>{({ input }) => <Input type="text" {...input} />}</Field>
);

TextField.defaultProps = {
  placeholder: 'Введите текст',
};

TextField.propTypes = {
  placeholder: PropTypes.string,
};

export default TextField;
