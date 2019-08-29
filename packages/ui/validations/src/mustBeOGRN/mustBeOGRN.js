import mustBeOGRNIP from '../mustBeOGRNIP';
import mustBeOGRNUL from '../mustBeOGRNUL';

/**
 * Функция валидации ОГРН
 * @param {ОГРН} value - Валидируемое значение
 */
const mustBeOGRN = (value) => {
  if (mustBeOGRNIP(value) && mustBeOGRNUL(value)) {
    return 'Неверный ОГРН. Введите корректный ОГРН.';
  }

  return null;
};

export default mustBeOGRN;
