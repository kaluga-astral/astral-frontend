import PropTypes from 'prop-types';
import React from 'react';
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';

import * as rules from '../../../validations/rules';

import Field from './Field';

const RegNumberPFRMask = (props) => {
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
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
    />
  );
};

RegNumberPFRMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const RegNumberPFRField = props => (
  <Field
    {...props}
    parse={value => value.replace(/(-|\(|\)| )/g, '')}
    validate={rules.mustBeRegNumberPFR}
  >
    {({ input }) => <Input {...input} inputComponent={RegNumberPFRMask} />}
  </Field>
);

RegNumberPFRField.defaultProps = {
  name: 'regNumberPfr',
  label: 'Рег. номер ПФР ',
  placeholder: null,
};

RegNumberPFRField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default RegNumberPFRField;
