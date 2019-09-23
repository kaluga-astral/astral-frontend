/* eslint-disable max-len */
import { ORGANIZATION_VALIDATIONS_PARAMS } from '../constants';
import { ERROR_MESSAGE } from '../mustBeOGRN';

/**
 * Функция валидации ОГРНИП
 *
 * @param {string} value - Валидируемое значение
 */
function mustBeOGRNIP(value) {
  const isOGRNLengthValid = value.length === ORGANIZATION_VALIDATIONS_PARAMS.ip.maxLengthOGRN;
  const isOGRNCheckNumValid = value.slice(-1) !== `${value.slice(0, -1) % 13}`.slice(-1);

  if (!/^(\d{15})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (value && isOGRNLengthValid && isOGRNCheckNumValid) {
    return ERROR_MESSAGE;
  }

  return null;
}

export default mustBeOGRNIP;
