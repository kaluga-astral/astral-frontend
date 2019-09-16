/* eslint-disable max-len */
import ORGANIZATION_TYPES from '@astral-frontend/constants/src/organizationTypes';
import { ERROR_MESSAGE } from '../mustBeINN';
import { getArrayDigitsOfValue, calcCheckNumForINN } from '../utils/utils';

/**
 * Проверка валидации ИНН ИП на корректность
 * @param {string} value
 */
const mustBeINNIP = (value) => {
  const isINNLengthValid = getArrayDigitsOfValue(value).length === ORGANIZATION_TYPES.individualEntrepreneur.maxLengthINN;

  const isINNCheckNumForElevenCharValid = calcCheckNumForINN(
    getArrayDigitsOfValue(value),
    ORGANIZATION_TYPES.individualEntrepreneur.weightsForCheckNumINN.elevenChar,
  ) !== getArrayDigitsOfValue(value)[10];

  const isINNCheckNumValidForTwelveChar = calcCheckNumForINN(
    getArrayDigitsOfValue(value),
    ORGANIZATION_TYPES.individualEntrepreneur.weightsForCheckNumINN.twelveChar,
  ) !== getArrayDigitsOfValue(value)[11];

  if (!/^(\d{12})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (isINNLengthValid && (isINNCheckNumForElevenCharValid || isINNCheckNumValidForTwelveChar)) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeINNIP;
