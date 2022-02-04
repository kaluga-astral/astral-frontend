import { calcCheckSumForBankAccount } from '../utils/utils';

const ERROR_MESSAGE =
  'Неверный расчетный счет. Проверьте правильность ввода БИК и рассчетного счета.';

/**
 *
 * Функция валидации Расчетного банковского счета
 * @param {string} bik - значение БИК, необходимое для валидации
 * @param {string} value - валидируемое значение
 *
 */
const mustBeCheckingAccount = bik =>
  function(value) {
    if (!/^(\d{20})$/.test(value)) {
      return ERROR_MESSAGE;
    }
    const validatedValue = String(bik.slice(-3) + value);
    if (!calcCheckSumForBankAccount(validatedValue)) {
      return ERROR_MESSAGE;
    }

    return null;
  };

export default mustBeCheckingAccount;
