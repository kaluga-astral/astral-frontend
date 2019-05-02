import mustBePhone from './mustBePhone';

describe('`mustBePhone` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBePhone(+712345678900)).toEqual('Номер телефона имеет некорректный формат');
    expect(mustBePhone()).toEqual('Номер телефона имеет некорректный формат');
    expect(mustBePhone(121)).toEqual('Номер телефона имеет некорректный формат');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBePhone(+71111111111)).toEqual(null);
  });
});
