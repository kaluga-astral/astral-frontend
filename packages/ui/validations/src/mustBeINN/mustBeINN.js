import mustBeINNIP from '../mustBeINNIP';
import mustBeINNUL from '../mustBeINNUL';

/**
 * Проверка валидации ИНН на корректность
 * @param {string} value
 */
const mustBeINN = (value) => {
  if (mustBeINNUL(value) && mustBeINNIP(value)) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  return null;
};

export default mustBeINN;
