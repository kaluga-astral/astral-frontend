import mustBeSNILS from './mustBeSNILS';

describe('mustBeSNILS', () => {
  it('должна возвращать сообщение об ошибке если value меньше 11 символов', () => {
    expect(mustBeSNILS('123456789')).toEqual('Неверный СНИЛС. Введите корректный СНИЛС.');
  });
  it('должна возвращать сообщение об ошибке если value больше 11 символов', () => {
    expect(mustBeSNILS('123456789101')).toEqual('Неверный СНИЛС. Введите корректный СНИЛС.');
  });
  it('должна возвращать null если value является валидным СНИЛС', () => {
    expect(mustBeSNILS('15657325992')).toEqual(null);
  });
});
