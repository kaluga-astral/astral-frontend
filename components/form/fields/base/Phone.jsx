import PropTypes from 'prop-types';
import React from 'react';
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';

import * as rules from '../../../../validations/rules';

import Field from '../Field';

const PhoneMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        '+',
        7,
        ' ',
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
    />
  );
};

PhoneMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const PhoneField = props => (
  <Field
    {...props}
    parse={value => value.replace(/(-|\(|\)| )/g, '')}
    validate={rules.mustBePhone}
  >
    {({ input }) => <Input {...input} type="tel" inputComponent={PhoneMask} />}
  </Field>
);

PhoneField.defaultProps = {
  label: null,
  placeholder: null,
};

PhoneField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PhoneField;
