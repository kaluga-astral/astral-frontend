import { startsWith } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import { mustBeMobilePhone, mustBePhone } from '@astral-frontend/validations';

import MaskField from '../MaskField';

const PHONE_MASK = '+7 (999) 999-99-99';
const removeSpecialSymbols = value => value?.replace(/\+|\(|\)|-|\s/g, '');

const PHONE_LENGTH = removeSpecialSymbols(PHONE_MASK).length;

const normalizeStringToPhone = string => {
  const phone = removeSpecialSymbols(string);
  const normalizePhone = startsWith(phone, '7') ? phone : `7${phone}`;

  return normalizePhone.slice(0, PHONE_LENGTH);
};

const beforeMaskedValueChange = (newValue, oldValue, typeSymbols) => {
  // Если пользователь вводит по символьно, то используется стандартное поведение MaskField
  if (!typeSymbols || typeSymbols?.length < PHONE_LENGTH - 1) {
    return newValue;
  }

  // нужно нормализовать телефон, чтобы в стор попало корректное значение
  const phone = normalizeStringToPhone(typeSymbols);

  // Если пользователь вставил телефон, то он используется как новое значение, без преобразования маски
  // так как маска обрезает символы
  return { ...newValue, value: phone };
};

const PhoneField = props => {
  const { type, validate: validateProp, ...restProps } = props;
  const validate = React.useCallback(
    value => {
      if (validateProp) {
        return validateProp(value);
      }

      if (type === 'mobile') {
        return mustBeMobilePhone(value);
      }

      return mustBePhone(value);
    },
    [validateProp, type],
  );

  return (
    <MaskField
      validate={validate}
      mask={PHONE_MASK}
      beforeMaskedValueChange={beforeMaskedValueChange}
      maskChar={null}
      {...restProps}
    />
  );
};

PhoneField.defaultProps = {
  name: 'phone',
  label: 'Номер телефона',
  parse: removeSpecialSymbols,
  type: 'mobile',
  validate: undefined,
};

PhoneField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  parse: PropTypes.func,
  type: PropTypes.oneOf(['all', 'mobile']),
  validate: PropTypes.func,
};

export default PhoneField;
