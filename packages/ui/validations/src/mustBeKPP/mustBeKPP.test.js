import mustBeKPP from './mustBeKPP';

describe('`mustBeKPP` validation rule', () => {
  test('should return error object if data is valid', () => {
    expect(mustBeKPP(7736)).toEqual('Неверный КПП. Введите корректный КПП.');
    expect(mustBeKPP(9999999999)).toEqual('Неверный КПП. Введите корректный КПП.');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeKPP(773601001)).toEqual(null);
    expect(mustBeKPP('7736AD001')).toEqual(null);
  });
});
