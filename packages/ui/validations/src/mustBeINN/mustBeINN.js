import mustBeINNIP from '../mustBeINNIP';
import mustBeINNUL from '../mustBeINNUL';

export const ERROR_MESSAGE = 'Неверный ИНН. Введите корректный ИНН.';

/**
 * Проверка валидации ИНН на корректность
 * @param {string} value
 */
function mustBeINN(value) {
  if (mustBeINNIP.call(this.ip, value) && mustBeINNUL.call(this.ul, value)) {
    return ERROR_MESSAGE;
  }
  return null;
}

export default mustBeINN;
