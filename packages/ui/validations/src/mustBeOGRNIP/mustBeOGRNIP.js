/* eslint-disable max-len */
import ORGANIZATION_TYPES from '@astral-frontend/constants/src/organizationTypes';

const ERROR_MESSAGE = 'Неверный ОГРН. Введите корректный ОГРН.';

/**
 * Функция валидации ОГРНИП
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeOGRNIP = (value) => {
  const isOGRNLengthValid = value.length === ORGANIZATION_TYPES.individualEntrepreneur.maxLengthOGRN;
  const isOGRNCheckNumValid = value.slice(-1) !== `${value.slice(0, -1) % 13}`.slice(-1);

  if (!/^(\d{15})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (value && isOGRNLengthValid && isOGRNCheckNumValid) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeOGRNIP;
