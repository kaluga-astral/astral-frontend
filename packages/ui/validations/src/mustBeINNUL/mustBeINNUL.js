/* eslint-disable max-len */
import { ORGANIZATION_VALIDATIONS_PARAMS } from '../constants';
import { ERROR_MESSAGE } from '../mustBeINN';
import { getArrayDigitsOfValue, calcCheckNumForINN } from '../utils/utils';

/**
 * Проверка валидации ИНН ЮЛ на корректность
 * @param {string} value
 */
function mustBeINNUL(value) {
  console.log(this, 'UL');
  const isINNLengthValid = getArrayDigitsOfValue(value).length === this.maxLengthINN;

  const checkNumFromINNString = getArrayDigitsOfValue(value)[9];

  // const calcCheckNumFromINNString = calcCheckNumForINN(
  //   getArrayDigitsOfValue(value),
  //   ORGANIZATION_VALIDATIONS_PARAMS.ul.weightForCheckNumINN,
  // );
  calcCheckNumForINN.call(this, getArrayDigitsOfValue(value), this.weightForCheckNumINN);

  const isINNCheckNumValid = calcCheckNumForINN(this.weightForCheckNumINN, getArrayDigitsOfValue(value))
    !== checkNumFromINNString;

  if (!/^(\d{10})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (isINNLengthValid && isINNCheckNumValid) {
    return ERROR_MESSAGE;
  }

  return null;
}

export default mustBeINNUL;
