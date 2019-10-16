/* eslint-disable react/no-this-in-sfc */
/* eslint-disable max-len */
import { ERROR_MESSAGE } from '../mustBeOGRN';

/**
 * Функция валидации ОГРН ЮЛ
 * @param {string} value - Валидируемое значение
 */
function mustBeOGRNUL(value) {
  const isOGRNLengthValid = value.length === this.maxLengthOGRN;
  const isOGRNCheckNumValid = value.slice(-1) !== `${value.slice(0, -1) % 11}`.slice(-1);

  if (!/^(\d{13})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (value && isOGRNLengthValid && isOGRNCheckNumValid) {
    return ERROR_MESSAGE;
  }

  return null;
}

export default mustBeOGRNUL;
