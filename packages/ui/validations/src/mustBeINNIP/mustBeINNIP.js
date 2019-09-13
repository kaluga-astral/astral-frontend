/* eslint-disable max-len */
import ORGANIZATION_TYPES from '@astral-frontend/constants/src/organizationTypes';
import { getArrayDigitsOfValue, calcCheckNumForINN } from '../utils/utils';

const ERROR_MESSAGE = 'Неверный ИНН. Введите корректный ИНН.';

/**
 * Проверка валидации ИНН ИП на корректность
 * @param {string} value
 */
const mustBeINNIP = (value) => {
  const isINNLengthValid = getArrayDigitsOfValue(value).length === ORGANIZATION_TYPES.individualEntrepreneur.maxLengthINN;
  const checkNumFromINNStringForElevenChar = getArrayDigitsOfValue(value)[10];
  const calcCheckNumFromINNStringForElevenChar = calcCheckNumForINN(
    getArrayDigitsOfValue(value),
    ORGANIZATION_TYPES.individualEntrepreneur.weightsForCheckNumINN.elevenChar,
  );
  const checkNumFromINNStringForTwelveChar = getArrayDigitsOfValue(value)[11];
  const calcCheckNumFromINNStringForTwelveChar = calcCheckNumForINN(
    getArrayDigitsOfValue(value),
    ORGANIZATION_TYPES.individualEntrepreneur.weightsForCheckNumINN.twelveChar,
  );
  const isINNCheckNumForElevenCharValid = calcCheckNumFromINNStringForElevenChar !== checkNumFromINNStringForElevenChar;
  const isINNCheckNumValidForTwelveChar = calcCheckNumFromINNStringForTwelveChar !== checkNumFromINNStringForTwelveChar;

  if (!/^(\d{12})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (isINNLengthValid && (isINNCheckNumForElevenCharValid || isINNCheckNumValidForTwelveChar)) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeINNIP;
