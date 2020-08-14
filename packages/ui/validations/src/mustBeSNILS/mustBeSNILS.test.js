import mustBeSNILS from './mustBeSNILS';

const ERROR_MESSAGE = 'Неверный СНИЛС. Введите корректный СНИЛС.';

describe('mustBeSNILS', () => {
  it('должна возвращать сообщение об ошибке если CНИЛС в неверном формате', () => {
    expect(mustBeSNILS('123 456 78 99')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если CНИЛС в неверном формате', () => {
    expect(mustBeSNILS('1234567899')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value меньше 11 символов', () => {
    expect(mustBeSNILS('123-456-78 9')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value больше 11 символов', () => {
    expect(mustBeSNILS('123-456-789 101')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value равняется 000-000-000 00', () => {
    expect(mustBeSNILS('000-000-000 00')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным СНИЛС', () => {
    expect(mustBeSNILS('156-573-259 92')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным СНИЛС', () => {
    expect(mustBeSNILS('992-937-877 10')).toEqual(ERROR_MESSAGE);
  });
});
