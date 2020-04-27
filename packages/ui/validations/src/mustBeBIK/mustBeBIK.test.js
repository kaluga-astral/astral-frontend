import mustBeBIK from './mustBeBIK';

const ERROR_MESSAGE = 'Неверный БИК. Введите корректный БИК.';

describe('`mustBeBIK` validation rule', () => {
  test('should return error if data is invalid', () => {
    expect(mustBeBIK('7736')).toEqual(ERROR_MESSAGE);
    expect(mustBeBIK('9999999999')).toEqual(ERROR_MESSAGE);
    expect(mustBeBIK('ABCDEFGHJK')).toEqual(ERROR_MESSAGE);
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeBIK('044525745')).toEqual(null);
  });
});
