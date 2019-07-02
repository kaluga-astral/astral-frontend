
/**
 * Функция валидации СНИЛС
 *
 * @param {string} value - Валидируемое значение
 */
const mustBeSNILS = (value) => {
<<<<<<< HEAD
  const weights = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0];
  const digits = value.match(/\d/g).map(Number);
  let checkDigit = digits.reduce((accumulator, item, i) => accumulator + item * weights[i], 0);
  const checkNull = 0;
  if (checkNull === 100) {
    checkDigit = 0;
  } if (checkDigit > 100) {
    checkDigit = parseInt(checkDigit % 101, 10);
    if (checkDigit === 100) {
      checkDigit = 0;
    } else {
      checkDigit = parseInt(checkDigit % 101, 10);
    }
  }
  if (checkDigit !== parseInt(value.slice(-2), 10)) {
=======
  const preparedValue = value.replace(/\D/g, '');

  if (!/^(\d{11})$/.test(preparedValue)) {
>>>>>>> f56de9f593e20b3ca07688e4e2b197242b0a500c
    return 'Неверный СНИЛС. Введите корректный СНИЛС.';
  }
};

export default mustBeSNILS;

