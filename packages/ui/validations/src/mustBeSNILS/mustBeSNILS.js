/**
 * Функция валидации СНИЛС
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeSNILS = (value) => {
  if (!/^(\d{11})$/.test(value)) {
    return 'Неверный СНИЛС. Введите корректный СНИЛС.';
  }

  return null;
};

export default mustBeSNILS;
