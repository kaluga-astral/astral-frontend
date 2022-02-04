import { calcCheckSumForBankAccount } from '../utils/utils';

const ERROR_MESSAGE =
  'Неверный корреспондентский счет. Проверьте правильность ввода БИК и корреспондентского счета.';

/**
 *
 * Функция валидации Корреспондентского банковского счета
 * @param {string} bik - значение БИК, необходимое для валидации
 * @param {string} value - валидируемое значение
 *
 */
const mustBeCorrespondentAccount = bik =>
  function(value) {
    if (!/^(\d{20})$/.test(value)) {
      return ERROR_MESSAGE;
    }
    const validatedValue = `0${bik.slice(4, 6)}${value}`;
    if (!calcCheckSumForBankAccount(validatedValue)) {
      return ERROR_MESSAGE;
    }

    return null;
  };

export default mustBeCorrespondentAccount;
