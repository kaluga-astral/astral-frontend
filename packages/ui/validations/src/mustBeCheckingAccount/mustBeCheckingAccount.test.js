import mustBeCheckingAccount from './mustBeCheckingAccount';

const ERROR_MESSAGE =
  'Неверный расчетный счет. Проверьте правильность ввода БИК и рассчетного счета.';
const CORRECT_BIK = '048602673';
const INCORRECT_BIK = '044525957';

describe('mustBeCheckingAccount', () => {
  it('должна возвращать сообщение об ошибке если value меньше 20 символов', () => {
    expect(mustBeCheckingAccount(CORRECT_BIK)('407028101250000011')).toEqual(
      ERROR_MESSAGE,
    );
  });
  it('должна возвращать сообщение об ошибке если value больше 20 символов', () => {
    expect(
      mustBeCheckingAccount(CORRECT_BIK)('4070281012500000119111'),
    ).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value является валидным расчетным счетом с БИК, непринадлежащим счету', () => {
    expect(
      mustBeCheckingAccount(INCORRECT_BIK)('40702810125000001191'),
    ).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным расчетным счетом с БИК, принадлежащим счету', () => {
    expect(mustBeCheckingAccount(CORRECT_BIK)('40000810120043211191')).toEqual(
      ERROR_MESSAGE,
    );
  });
  it('должна возвращать сообщение об ошибке если value является невалидным расчетным счетом с БИК, непринадлежащим счету', () => {
    expect(
      mustBeCheckingAccount(INCORRECT_BIK)('40000810120043211191'),
    ).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным расчетным счетом с БИК, принадлежащим счету', () => {
    expect(mustBeCheckingAccount(CORRECT_BIK)('40702810125000001191')).toEqual(
      null,
    );
  });
});
