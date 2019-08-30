import { getArrayDigitsOfValue, calcCheckNumForINN } from '../utils';

const ERROR_MESSAGE = 'Неверный ИНН. Введите корректный ИНН.';

/**
 * Проверка валидации ИНН ИП на корректность
 * @param {string} value
 */
const mustBeINNIP = (value) => {
  if (!/^(\d{12})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (
    getArrayDigitsOfValue(value).length === 12
    && (calcCheckNumForINN(getArrayDigitsOfValue(value), [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0])
      !== getArrayDigitsOfValue(value)[10]
      || calcCheckNumForINN(getArrayDigitsOfValue(value), [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0])
        !== getArrayDigitsOfValue(value)[11])
  ) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeINNIP;
