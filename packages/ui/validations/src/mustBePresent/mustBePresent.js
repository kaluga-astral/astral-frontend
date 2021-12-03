import {
  isBoolean,
  isDate,
  isEmpty,
  isNumber,
  isString,
  trim,
} from 'lodash-es';

export const ERROR_MESSAGE = 'Поле не заполнено';

export const mustBePresent = value => {
  if (isNumber(value) || isDate(value)) {
    return null;
  }

  if (isString(value)) {
    return trim(value) ? null : ERROR_MESSAGE;
  }

  if (isBoolean(value)) {
    return value ? null : ERROR_MESSAGE;
  }

  if (!isEmpty(value)) {
    return null;
  }

  return ERROR_MESSAGE;
};
