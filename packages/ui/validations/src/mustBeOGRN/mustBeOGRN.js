import mustBeOGRNIP from '../mustBeOGRNIP';
import mustBeOGRNUL from '../mustBeOGRNUL';

export const ERROR_MESSAGE = 'Неверный ОГРН. Введите корректный ОГРН.';

/**
 * Функция валидации ОГРН
 * @param {string} value - Валидируемое значение
 */
export const mustBeOGRN = (value) => {
  if (mustBeOGRNIP(value) && mustBeOGRNUL(value)) {
    return ERROR_MESSAGE;
  }

  return null;
};
