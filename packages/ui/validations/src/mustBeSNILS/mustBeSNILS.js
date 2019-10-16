import { removeSpecialCharacters, calcCheckSumForSNILS } from '../utils/utils';

const ERROR_MESSAGE = 'Неверный СНИЛС. Введите корректный СНИЛС.';
const RESTRICTED_VALUES = ['00000000000'];
const DEFAULT_CHECKED_SUM = [0, 100, 101];

/**
 *
 * Функция валидации СНИЛС
 * @param {string} value - Валидируемое значение
 *
 */
const mustBeSNILS = (value) => {
  if (!/^(\d{3})-(\d{3})-(\d{3})\s(\d{2})$/.test(value)) {
    return ERROR_MESSAGE;
  }

  if (!/^(\d{11})$/.test(removeSpecialCharacters(value))) {
    return ERROR_MESSAGE;
  }
  if (RESTRICTED_VALUES.includes(removeSpecialCharacters(value))) {
    return ERROR_MESSAGE;
  }

  const checkSum = Number(removeSpecialCharacters(value).slice(9, 11));
  const calculatedCheckSum = calcCheckSumForSNILS(removeSpecialCharacters(value));

  if (calculatedCheckSum < DEFAULT_CHECKED_SUM[1]) {
    if (calculatedCheckSum === checkSum) {
      return null;
    }
    return ERROR_MESSAGE;
  }

  if (
    calculatedCheckSum === DEFAULT_CHECKED_SUM[1]
    || calculatedCheckSum === DEFAULT_CHECKED_SUM[2]
  ) {
    if (checkSum === DEFAULT_CHECKED_SUM[0]) {
      return null;
    }

    return ERROR_MESSAGE;
  }

  if (calculatedCheckSum > DEFAULT_CHECKED_SUM[2]) {
    if (
      calculatedCheckSum % DEFAULT_CHECKED_SUM[2] === checkSum
      || (calculatedCheckSum % DEFAULT_CHECKED_SUM[2] === DEFAULT_CHECKED_SUM[1]
        && checkSum === DEFAULT_CHECKED_SUM[0])
    ) {
      return null;
    }
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeSNILS;
