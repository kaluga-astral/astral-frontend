import minLength from './minLength';

describe('`minLength` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(minLength(10)('0123')).toEqual('Минимальная длина поля 10 символов.');
  });

  test('should return empty object if value is valid', () => {
    expect(minLength(10)('0123456789')).toEqual(null);
    expect(minLength(2)('0123456789122')).toEqual(null);
  });

  test('should throw an error if params invalid', () => {
    expect(() => minLength(0)('0123456789')).toThrow();
    expect(() => minLength(-2)('0123456789')).toThrow();
  });
});
