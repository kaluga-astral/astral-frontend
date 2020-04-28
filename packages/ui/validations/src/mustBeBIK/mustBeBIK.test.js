import mustBeBIK from './mustBeBIK';

const ERROR_MESSAGE = 'Неверный БИК. Введите корректный БИК.';

describe('mustBeBIK validation rule', () => {
  test('должна возвращать сообщение об ошибке если value состоит не состоит из цифр', () => {
    expect(mustBeBIK('ABCDEFGHJK')).toEqual(ERROR_MESSAGE);
    expect(mustBeBIK('11!!2@#!@#')).toEqual(ERROR_MESSAGE);
    expect(mustBeBIK('**!!*@#!@#')).toEqual(ERROR_MESSAGE);
  });
  test('должна возвращать сообщение об ошибке если value больше 9 символов', () => {
    expect(mustBeBIK('9999999999')).toEqual(ERROR_MESSAGE);
  });
  test('должна возвращать сообщение об ошибке если value меньше 9 символов', () => {
    expect(mustBeBIK('7736')).toEqual(ERROR_MESSAGE);
  });

  test('должна возвращать null если value является валидным БИК', () => {
    expect(mustBeBIK('044525745')).toEqual(null);
  });
});
