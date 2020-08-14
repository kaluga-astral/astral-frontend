import mustBePassportNumber from './mustBePassportNumber';

describe('`mustBePassportNumber` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBePassportNumber(12345678)).toEqual(
      'Неверный номер. Введите корректный номер.',
    );
    expect(mustBePassportNumber(121)).toEqual(
      'Неверный номер. Введите корректный номер.',
    );
  });

  test('should return empty object if data is valid', () => {
    expect(mustBePassportNumber(123456)).toEqual(null);
  });
});
