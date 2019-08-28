import mustBeOGRN from './mustBeOGRN';

describe('mustBeOGRN', () => {
  it('должна возвращать сообщение об ошибке если value < 13 символов', () => {
    const value = new Array(12).fill('1').join('');

    expect(mustBeOGRN(value)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
  it('должна возвращать сообщение об ошибке если value > 13 символов и value < 15 символов', () => {
    const value = new Array(14).fill('1').join('');

    expect(mustBeOGRN(value)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
  it('должна возвращать сообщение об ошибке если value > 15 символов', () => {
    const value = new Array(16).fill('1').join('');

    expect(mustBeOGRN(value)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
  it('должна возвращать null если value является валидным ОГРН', () => {
    expect(mustBeOGRN('1173702020084')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ОГРН', () => {
    expect(mustBeOGRN('1375748870009')).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
});
