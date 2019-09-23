import mustBeOGRNIP from '../mustBeOGRNIP';
import mustBeOGRNUL from '../mustBeOGRNUL';

export const ERROR_MESSAGE = 'Неверный ОГРН. Введите корректный ОГРН.';

/**
 * Функция валидации ОГРН
 * @param {string} value - Валидируемое значение
 */
function mustBeOGRN(value) {
  if (mustBeOGRNIP.call(this, value) && mustBeOGRNUL.call(this, value)) {
    return ERROR_MESSAGE;
  }

  return null;
}

export default mustBeOGRN;
