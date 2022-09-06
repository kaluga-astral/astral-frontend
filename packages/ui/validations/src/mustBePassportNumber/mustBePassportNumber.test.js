import mustBePassportNumber, { ERROR_MESSAGE } from './mustBePassportNumber';

describe('`mustBePassportNumber` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBePassportNumber(12345678)).toEqual(ERROR_MESSAGE);
    expect(mustBePassportNumber(121)).toEqual(ERROR_MESSAGE);
  });

  test('should return empty object if data is valid', () => {
    expect(mustBePassportNumber(123456)).toEqual(null);
  });
});
