import mustBeINN from './mustBeINN';

describe('mustBeINN', () => {
  it('должна возвращать сообщение об ошибке если value < 10 символов', () => {
    const value = new Array(9).fill('1').join();

    expect(mustBeINN(value)).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
  it('должна возвращать сообщение об ошибке если value > 10 символов и value < 12 символов', () => {
    const value = new Array(11).fill('1').join();

    expect(mustBeINN(value)).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
  it('должна возвращать сообщение об ошибке если value > 12 символов', () => {
    const value = new Array(13).fill('1').join();

    expect(mustBeINN(value)).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
  it('должна возвращать null если value является валидным ИНН ЮЛ', () => {
    expect(mustBeINN('967791703899')).toEqual(null);
  });
  it('должна возвращать null если value является валидным ИНН ИП', () => {
    expect(mustBeINN('9605503197')).toEqual(null);
  });
});
