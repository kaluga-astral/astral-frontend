import ORGANIZATION_TYPES from '@astral-frontend/constants/src/organizationTypes';
import { ERROR_MESSAGE } from '../mustBeOGRN';

/**
 * Функция валидации ОГРН ЮЛ
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeOGRNUL = (value) => {
  const isOGRNLengthValid = value.length === ORGANIZATION_TYPES.legalPerson.maxLengthOGRN;
  const isOGRNCheckNumValid = value.slice(-1) !== `${value.slice(0, -1) % 11}`.slice(-1);

  if (!/^(\d{13})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (value && isOGRNLengthValid && isOGRNCheckNumValid) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeOGRNUL;
