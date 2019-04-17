import mustBeINN from './mustBeINN';

describe('`mustBeINN` validation rule', () => {
  test('should return an error message if value is invalid', () => {
    expect(mustBeINN(222222222222)).toEqual('Неверный ИНН. Введите корректный ИНН.');
    expect(mustBeINN(2222222222)).toEqual('Неверный ИНН. Введите корректный ИНН.');
    expect(mustBeINN(123123123123)).toEqual('Неверный ИНН. Введите корректный ИНН.');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeINN(500100732259)).toEqual(null);
    expect(mustBeINN(7830002293)).toEqual(null);
  });
});
