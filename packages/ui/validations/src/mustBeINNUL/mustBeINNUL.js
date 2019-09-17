/* eslint-disable max-len */
import ORGANIZATION_VALIDATIONS_PARAMS from '@astral-frontend/constants/src/organizationValidationsParams';
import { ERROR_MESSAGE } from '../mustBeINN';
import { getArrayDigitsOfValue, calcCheckNumForINN } from '../utils/utils';

/**
 * Проверка валидации ИНН ЮЛ на корректность
 * @param {string} value
 */
const mustBeINNUL = (value) => {
  const isINNLengthValid = getArrayDigitsOfValue(value).length
    === ORGANIZATION_VALIDATIONS_PARAMS.legalPerson.maxLengthINN;
  const checkNumFromINNString = getArrayDigitsOfValue(value)[9];
  const calcCheckNumFromINNString = calcCheckNumForINN(
    getArrayDigitsOfValue(value),
    ORGANIZATION_VALIDATIONS_PARAMS.legalPerson.weightForCheckNumINN,
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
