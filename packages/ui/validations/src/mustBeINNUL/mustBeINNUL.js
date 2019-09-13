import { getArrayDigitsOfValue, calcCheckNumForINN } from '../utils/utils';

const ERROR_MESSAGE = 'Неверный ИНН. Введите корректный ИНН.';

/**
 * Проверка валидации ИНН ЮЛ на корректность
 * @param {string} value
 */
const mustBeULINN = (value) => {
  if (!/^(\d{10})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (
    getArrayDigitsOfValue(value).length === 10
    && calcCheckNumForINN(getArrayDigitsOfValue(value), [2, 4, 10, 3, 5, 9, 4, 6, 8, 0])
      !== getArrayDigitsOfValue(value)[9]
  ) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeULINN;
