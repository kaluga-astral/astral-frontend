/**
 * Функция валидации ОГРН ЮЛ
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeOGRNUL = (value) => {
  if (!/^(\d{13})$/.test(value)) {
    return 'Неверный ОГРН. Введите корректный ОГРН.';
  }

  if (value && value.length === 13 && value.slice(-1) !== `${value.slice(0, -1) % 11}`.slice(-1)) {
    return 'Неверный ОГРН. Введите корректный ОГРН.';
  }

  return null;
};

export default mustBeOGRNUL;
