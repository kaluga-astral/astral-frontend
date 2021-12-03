/* eslint-disable react/no-this-in-sfc */
import mustBeOGRNIP from '../mustBeOGRNIP';
import mustBeOGRNUL from '../mustBeOGRNUL';

export const ERROR_MESSAGE = 'Некорректный ОГРН';

/**
 * Функция валидации ОГРН
 * @param {string} value - Валидируемое значение
 */
function mustBeOGRN(value) {
  if (mustBeOGRNIP.call(this.ip, value) && mustBeOGRNUL.call(this.ul, value)) {
    return ERROR_MESSAGE;
  }

  return null;
}

export default mustBeOGRN;
