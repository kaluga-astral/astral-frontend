import PropTypes from 'prop-types';
import React from 'react';
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';

import * as rules from '../../../validations/rules';

import Field from './Field';

const SNILSMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
    />
  );
};

SNILSMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const SNILSField = props => (
  <Field
    {...props}
    parse={value => value.replace(/(-|\(|\)| )/g, '')}
    validate={rules.mustBeSNILS}
  >
    {({ input }) => <Input {...input} inputComponent={SNILSMask} />}
  </Field>
);

SNILSField.defaultProps = {
  name: 'snils',
  label: 'СНИЛС',
  placeholder: null,
};

SNILSField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SNILSField;
