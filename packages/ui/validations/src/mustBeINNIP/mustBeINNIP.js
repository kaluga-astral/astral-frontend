/* eslint-disable react/no-this-in-sfc */
/* eslint-disable max-len */
import { ERROR_MESSAGE } from '../mustBeINN';
import { getArrayDigitsOfValue, calcCheckNumForINN } from '../utils/utils';

/**
 * Проверка валидации ИНН ИП на корректность
 * @param {string} value
 */
function mustBeINNIP(value) {
  const isINNLengthValid = getArrayDigitsOfValue(value).length === this.maxLengthINN;

  const isINNCheckNumForElevenCharValid = calcCheckNumForINN(getArrayDigitsOfValue(value), this.weightsForCheckNumINN.elevenChars)
    !== getArrayDigitsOfValue(value)[10];

  const isINNCheckNumValidForTwelveChar = calcCheckNumForINN(getArrayDigitsOfValue(value), this.weightsForCheckNumINN.twelveChars)
    !== getArrayDigitsOfValue(value)[11];

  if (!/^(\d{12})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (isINNLengthValid && (isINNCheckNumForElevenCharValid || isINNCheckNumValidForTwelveChar)) {
    return ERROR_MESSAGE;
  }

  return null;
}

export default mustBeINNIP;
