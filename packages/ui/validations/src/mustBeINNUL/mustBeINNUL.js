/* eslint-disable max-len */
import ORGANIZATION_TYPES from '@astral-frontend/constants/src/organizationTypes';
import { ERROR_MESSAGE } from '../mustBeINN';
import { getArrayDigitsOfValue, calcCheckNumForINN } from '../utils/utils';

/**
 * Проверка валидации ИНН ЮЛ на корректность
 * @param {string} value
 */
const mustBeINNUL = (value) => {
  const isINNLengthValid = getArrayDigitsOfValue(value).length === ORGANIZATION_TYPES.legalPerson.maxLengthINN;
  const checkNumFromINNString = getArrayDigitsOfValue(value)[9];
  const calcCheckNumFromINNString = calcCheckNumForINN(
    getArrayDigitsOfValue(value),
    ORGANIZATION_TYPES.legalPerson.weightForCheckNumINN,
  );
  const isINNCheckNumValid = calcCheckNumFromINNString !== checkNumFromINNString;

  if (!/^(\d{10})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (isINNLengthValid && isINNCheckNumValid) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeINNUL;
