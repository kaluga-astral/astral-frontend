/**
 * Функция валидации СНИЛС
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeSNILS = (value) => {
  if (!/^\d{3}-\d{3}-\d{3} \d{2}$/.test(value)) {
    return 'Неверный СНИЛС. Введите корректный СНИЛС.';
  }

  return null;
};

export default mustBeSNILS;
