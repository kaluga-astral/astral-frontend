import mustBeOGRNIP from './mustBeOGRNIP';

describe('mustBeOGRNIP', () => {
  it('должна возвращать сообщение об ошибке если value < 13 символов', () => {
    const value = new Array(12).fill('1').join('');

    expect(mustBeOGRNIP(value)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
  it('должна возвращать сообщение об ошибке если value > 13 символов и value < 15 символов', () => {
    const value = new Array(14).fill('1').join('');

    expect(mustBeOGRNIP(value)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
  it('должна возвращать сообщение об ошибке если value > 15 символов', () => {
    const value = new Array(16).fill('1').join('');

    expect(mustBeOGRNIP(value)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
  it('должна возвращать null если value является валидным ОГРНИП', () => {
    expect(mustBeOGRNIP('316682000089619')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ОГРНИП', () => {
    expect(mustBeOGRNIP('316682000000019')).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
});
