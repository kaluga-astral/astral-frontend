import mustBeCorrespondentAccount from './mustBeCorrespondentAccount';

const ERROR_MESSAGE =
  'Неверный корреспондентский счет. Проверьте правильность ввода БИК и корреспондентского счета.';
const CORRECT_BIK = '048602673';
const INCORRECT_BIK = '044525957';

describe('mustBeCorrespondentAccount', () => {
  it('должна возвращать сообщение об ошибке если value меньше 20 символов', () => {
    expect(
      mustBeCorrespondentAccount(CORRECT_BIK)('301018106000000006'),
    ).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value больше 20 символов', () => {
    expect(
      mustBeCorrespondentAccount(CORRECT_BIK)('3010181060000000067334'),
    ).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value является валидным корреспондентским счетом с БИК, непринадлежащим счету', () => {
    expect(
      mustBeCorrespondentAccount(INCORRECT_BIK)('30101810600000000673'),
    ).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным корреспондентским счетом с БИК, принадлежащим счету', () => {
    expect(
      mustBeCorrespondentAccount(CORRECT_BIK)('30999899900100000673'),
    ).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным корреспондентским счетом с БИК, непринадлежащим счету', () => {
    expect(
      mustBeCorrespondentAccount(INCORRECT_BIK)('30999899900100000673'),
    ).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным корреспондентским счетом с БИК, принадлежащим счету', () => {
    expect(
      mustBeCorrespondentAccount(CORRECT_BIK)('30101810600000000673'),
    ).toEqual(null);
  });
});
