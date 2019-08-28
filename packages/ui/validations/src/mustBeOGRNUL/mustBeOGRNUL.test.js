import mustBeOGRNUL from './mustBeOGRNUL';

describe('mustBeOGRNUL', () => {
  it('должна возвращать сообщение об ошибке если value < 13 символов', () => {
    const value = new Array(12).fill('1').join('');

    expect(mustBeOGRNUL(value)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
  it('должна возвращать сообщение об ошибке если value > 13 символов и value < 15 символов', () => {
    const value = new Array(14).fill('1').join('');

    expect(mustBeOGRNUL(value)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
  it('должна возвращать сообщение об ошибке если value > 15 символов', () => {
    const value = new Array(16).fill('1').join('');

    expect(mustBeOGRNUL(value)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
  it('должна возвращать null если value является валидным ОГРН ЮЛ', () => {
    expect(mustBeOGRNUL('1175958036814')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ОГРН ЮЛ', () => {
    expect(mustBeOGRNUL('1175958000004')).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });
});
