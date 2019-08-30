const ERROR_MESSAGE = 'Неверный ОГРН. Введите корректный ОГРН.';

/**
 * Функция валидации ОГРНИП
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeOGRNIP = (value) => {
  if (!/^(\d{15})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (value && value.length === 15 && value.slice(-1) !== `${value.slice(0, -1) % 13}`.slice(-1)) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeOGRNIP;
