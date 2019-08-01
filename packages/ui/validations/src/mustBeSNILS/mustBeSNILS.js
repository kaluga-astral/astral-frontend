/**
 * Функция валидации СНИЛС
 *
 * @param {string} value - Валидируемое значение
 */
const ERROR_MESSAGE = 'Неверный СНИЛС. Введите корректный СНИЛС.';

const RESTRICTED_VALUES = ['00000000000'];
const DEFAULT_CHECKED_SUMM = [0, 100, 101];

const calcCheckSum = digitsOfValue => digitsOfValue
  .slice(0, 9)
  .split('')
  .map(Number)
  .reduce((sum, currentValue, index) => sum + currentValue * (9 - index), 0);

const mustBeSNILS = (value) => {
  if (!/^(\d{3})-(\d{3})-(\d{3})\s(\d{2})$/.test(value)) {
    return ERROR_MESSAGE;
  }
  const digitsOfValue = value.replace(/\D/g, '');

  if (!/^(\d{11})$/.test(digitsOfValue)) {
    return ERROR_MESSAGE;
  }
  if (RESTRICTED_VALUES.includes(digitsOfValue)) {
    return ERROR_MESSAGE;
  }

  const checkSum = Number(digitsOfValue.slice(9, 11));
  const calculatedCheckSum = calcCheckSum(digitsOfValue);

  if (calculatedCheckSum < DEFAULT_CHECKED_SUMM[1]) {
    if (calculatedCheckSum === checkSum) {
      return null;
    }
    return ERROR_MESSAGE;
  }

  if (
    calculatedCheckSum === DEFAULT_CHECKED_SUMM[1]
    || calculatedCheckSum === DEFAULT_CHECKED_SUMM[2]
  ) {
    if (checkSum === DEFAULT_CHECKED_SUMM[0]) {
      return null;
    }

    return ERROR_MESSAGE;
  }

  if (calculatedCheckSum > DEFAULT_CHECKED_SUMM[2]) {
    if (
      calculatedCheckSum % DEFAULT_CHECKED_SUMM[2] === checkSum
      || (calculatedCheckSum % DEFAULT_CHECKED_SUMM[2] === DEFAULT_CHECKED_SUMM[1]
        && checkSum === DEFAULT_CHECKED_SUMM[0])
    ) {
      return null;
    }
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeSNILS;
