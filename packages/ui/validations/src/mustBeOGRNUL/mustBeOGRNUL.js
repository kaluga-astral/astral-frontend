const ERROR_MESSAGE = 'Неверный ОГРН. Введите корректный ОГРН.';
/**
 * Функция валидации ОГРН ЮЛ
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeOGRNUL = (value) => {
  if (!/^(\d{13})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (value && value.length === 13 && value.slice(-1) !== `${value.slice(0, -1) % 11}`.slice(-1)) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeOGRNUL;
