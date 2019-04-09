import mustBeNumber from './mustBeNumber';

describe('`mustBeNumber` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeNumber('string')).toEqual('Должно быть числом');
    expect(mustBeNumber('10')).toEqual('Должно быть числом');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeNumber(10)).toEqual(null);
  });
});
