import maxLength from './maxLength';

describe('`maxLength` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(maxLength(3)('012300000')).toBe('Макс. символов: 3');
  });

  test('should return empty object if value is valid', () => {
    expect(maxLength(10)('0123456789')).toBe(null);
    expect(maxLength(20)('0123456')).toBe(null);
  });

  test('should throw an error if params invalid', () => {
    expect(() => maxLength(0)('0123456789')).toThrow();
    expect(() => maxLength(-2)('0123456789')).toThrow();
  });
});
