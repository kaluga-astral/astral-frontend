/**
 * Функция валидации СНИЛС
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeSNILS = (value) => {
  const preparedValue = value.replace(/\D/g, '');

  if (!/^(\d{11})$/.test(preparedValue)) {
    return 'Неверный СНИЛС. Введите корректный СНИЛС.';
  }

  return null;
};

export default mustBeSNILS;
