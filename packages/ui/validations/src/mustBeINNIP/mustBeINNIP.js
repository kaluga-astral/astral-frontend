import { ORGANIZATION_VALIDATIONS_PARAMS } from '../constants';
import { ERROR_MESSAGE } from '../mustBeINN';
import { getArrayDigitsOfValue, calcCheckNumForINN } from '../utils/utils';

/**
 * Проверка валидации ИНН ИП на корректность
 * @param {string} value
 */
function mustBeINNIP(value) {
  const isINNLengthValid = getArrayDigitsOfValue(value).length === ORGANIZATION_VALIDATIONS_PARAMS.ip.maxLengthINN;

  const isINNCheckNumForElevenCharValid = calcCheckNumForINN(
    getArrayDigitsOfValue(value),
    ORGANIZATION_VALIDATIONS_PARAMS.ip.weightsForCheckNumINN.elevenChars,
  ) !== getArrayDigitsOfValue(value)[10];

  const isINNCheckNumValidForTwelveChar = calcCheckNumForINN(
    getArrayDigitsOfValue(value),
    ORGANIZATION_VALIDATIONS_PARAMS.ip.weightsForCheckNumINN.twelveChars,
  ) !== getArrayDigitsOfValue(value)[11];

  if (!/^(\d{12})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (isINNLengthValid && (isINNCheckNumForElevenCharValid || isINNCheckNumValidForTwelveChar)) {
    return ERROR_MESSAGE;
  }

  return null;
}

export default mustBeINNIP;
