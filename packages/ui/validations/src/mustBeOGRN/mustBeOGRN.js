/**
 * Функция валидации ОГРН
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeOGRN = (value) => {
  if (!/^(\d{13,15})$/.test(value)) {
    return 'Неверный ОГРН. Введите корректный ОГРН.';
  }

  return null;
};

export default mustBeOGRN;
