import mustBeINN from './mustBeIPINN';

describe('mustBeIPINN', () => {
  it('должна возвращать сообщение об ошибке если value < 10 символов', () => {
    const value = new Array(9).fill('1').join('');

    expect(mustBeINN(value)).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
  it('должна возвращать сообщение об ошибке если value > 10 символов и value < 12 символов', () => {
    const value = new Array(11).fill('1').join('');

    expect(mustBeINN(value)).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
  it('должна возвращать сообщение об ошибке если value > 12 символов', () => {
    const value = new Array(13).fill('1').join('');

    expect(mustBeINN(value)).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
  it('должна возвращать null если value является валидным ИНН ИП', () => {
    expect(mustBeINN('683000788049')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ИНН ИП', () => {
    expect(mustBeINN('683000700049')).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
});
