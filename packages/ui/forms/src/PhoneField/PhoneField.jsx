import PropTypes from 'prop-types';
import React from 'react';
import { mustBePhone } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const PHONE_MASK = '+7 (999) 999-99-99';

const removeSpecialSymbols = value => value.replace(/\+|\(|\)|-|\s/g, '');
const formatValueAfterPaste = value => value?.replace(/\+7/, '');

const PhoneField = props => {
  const { allowAllNumbers, ...restProps } = props;
  const validate = React.useCallback(value => {
    if (allowAllNumbers) {
      return mustBePhone(value, true);
    }

    return mustBePhone(value);
  }, []);

  return (
    <MaskField
      validate={validate}
      mask={PHONE_MASK}
      maskChar={null}
      {...restProps}
    />
  );
};

PhoneField.defaultProps = {
  allowAllNumbers: false,
  name: 'phone',
  label: 'Номер телефона',
  parse: removeSpecialSymbols,
  format: formatValueAfterPaste,
};

PhoneField.propTypes = {
  allowAllNumbers: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  parse: PropTypes.func,
  format: PropTypes.func,
};

export default PhoneField;
