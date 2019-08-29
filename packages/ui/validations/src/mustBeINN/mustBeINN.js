import mustBeIPINN from '../mustBeIPINN';
import mustBeULINN from '../mustBeULINN';

/**
 * Проверка валидации ИНН на корректность
 * @param {ИНН} value
 */
const mustBeINN = (value) => {
  if (mustBeULINN(value) && mustBeIPINN(value)) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  return null;
};

export default mustBeINN;
