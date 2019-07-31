/**
 * Функция валидации СНИЛС
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeSNILS = (value) => {
  const preparedValue = value.replace(/\D/g, '');
  const checkSum = parseInt(preparedValue.slice(9), 10);
  const snilsInArrayFormat = preparedValue.split('');

  const sum = snilsInArrayFormat[0] * 9
    + snilsInArrayFormat[1] * 8
    + snilsInArrayFormat[2] * 7
    + snilsInArrayFormat[3] * 6
    + snilsInArrayFormat[4] * 5
    + snilsInArrayFormat[5] * 4
    + snilsInArrayFormat[6] * 3
    + snilsInArrayFormat[7] * 2
    + snilsInArrayFormat[8] * 1;

  if (sum < 100) {
    if (sum === checkSum) {
      return null;
    }
    return 'Неверный СНИЛС. Введите корректный СНИЛС.';
  }

  if (sum === 100 || sum === 101) {
    if (checkSum === 0) {
      return null;
    }
    return 'Неверный СНИЛС. Введите корректный СНИЛС.';
  }

  if (sum > 101) {
    if (sum % 101 === checkSum || (sum % 101 === 100 && checkSum === 0)) {
      return null;
    }
    return 'Неверный СНИЛС. Введите корректный СНИЛС.';
  }

  if (!/^(\d{11})$/.test(preparedValue)) {
    return 'Неверный СНИЛС. Введите корректный СНИЛС.';
  }

  return null;
};

export default mustBeSNILS;
