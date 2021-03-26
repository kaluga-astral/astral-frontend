/* eslint-disable react/no-this-in-sfc */
/* eslint-disable max-len */
import { ERROR_MESSAGE } from '../mustBeINN';
import { calcCheckNumForINN, getArrayDigitsOfValue } from '../utils/utils';

/**
 * Проверка валидации ИНН ЮЛ на корректность
 * @param {string} value
 */
function mustBeINNUL(value) {
  const isINNLengthValid =
    getArrayDigitsOfValue(value).length === this.maxLengthINN;

  const checkNumFromINNString = getArrayDigitsOfValue(value)[9];

  const calcCheckNumFromINNString = calcCheckNumForINN(
    getArrayDigitsOfValue(value),
    this.weightsForCheckNumINN,
  );

  const isINNCheckNumValid =
    calcCheckNumFromINNString !== checkNumFromINNString;

  if (!/^(\d{10})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (isINNLengthValid && isINNCheckNumValid) {
    return ERROR_MESSAGE;
  }

  return null;
}

export default mustBeINNUL;
