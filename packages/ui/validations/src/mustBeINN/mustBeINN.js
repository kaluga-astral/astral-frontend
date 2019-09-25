import mustBeINNIP from '../mustBeINNIP';
import mustBeINNUL from '../mustBeINNUL';
import { ORGANIZATION_VALIDATIONS_PARAMS } from '../constants';

export const ERROR_MESSAGE = 'Неверный ИНН. Введите корректный ИНН.';

/**
 * Проверка валидации ИНН на корректность
 * @param {string} value
 */
function mustBeINN(value) {
  const organizationType = value.length === 10 ? 'ul' : 'ip';
  const validationParams = ORGANIZATION_VALIDATIONS_PARAMS[organizationType];

  if (
    (organizationType === 'ul' && mustBeINNUL.call(validationParams, value))
    || (organizationType === 'ip' && mustBeINNIP.call(validationParams, value))
  ) {
    return ERROR_MESSAGE;
  }

  return null;
}

export default mustBeINN;
