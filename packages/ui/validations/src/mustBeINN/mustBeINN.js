import mustBeINNIP from '../mustBeINNIP';
import mustBeINNUL from '../mustBeINNUL';

const ERROR_MESSAGE = 'Неверный ИНН. Введите корректный ИНН.';

/**
 * Проверка валидации ИНН на корректность
 * @param {string} value
 */
const mustBeINN = (value) => {
  if (mustBeINNUL(value) && mustBeINNIP(value)) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeINN;
