import mustBeINNUL from './mustBeINNUL';

describe('mustBeULINN', () => {
  it('должна возвращать сообщение об ошибке если value < 10 символов', () => {
    const value = new Array(9).fill('1').join('');

    expect(mustBeINNUL(value)).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
  it('должна возвращать сообщение об ошибке если value > 10', () => {
    const value = new Array(11).fill('1').join('');

    expect(mustBeINNUL(value)).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
  it('должна возвращать null если value === 10 символов (контрольная сумма верна)', () => {
    expect(mustBeINNUL('3703020990')).toEqual(null);
  });
  it('должна возвращать null если value === 10 символов (контрольная сумма неверна)', () => {
    expect(mustBeINNUL('3703020000')).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
  it('должна возвращать null если value является валидным ИНН ЮЛ', () => {
    expect(mustBeINNUL('3703020990')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ИНН ЮЛ', () => {
    expect(mustBeINNUL('3703020000')).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });
});
