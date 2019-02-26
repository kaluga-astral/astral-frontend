import PropTypes from 'prop-types';
import React from 'react';
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';

import * as rules from '../../../validations/rules';

import Field from './Field';

const DepartmentCodeMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
};

DepartmentCodeMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const DepartmentCodeField = props => (
  <Field
    {...props}
    parse={value => value.replace(/(-|\(|\)| )/g, '')}
    validate={rules.mustBeDepartmentCode}
  >
    {({ input }) => <Input {...input} inputComponent={DepartmentCodeMask} />}
  </Field>
);

DepartmentCodeField.defaultProps = {
  name: null,
  label: 'Код подразделения',
  placeholder: null,
};

DepartmentCodeField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default DepartmentCodeField;
