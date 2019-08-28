/**
 * Функция валидации ОГРНИП
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeOGRN = (value) => {
  if (!/^(\d{15})$/.test(value)) {
    return 'Неверный ОГРН. Введите корректный ОГРН.';
  }

  if (value && value.length === 15 && value.slice(-1) !== `${value.slice(0, -1) % 13}`.slice(-1)) {
    return 'Неверный ОГРН. Введите корректный ОГРН.';
  }

  return null;
};

export default mustBeOGRN;
