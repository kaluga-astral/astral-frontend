import mustBePassportSeries from './mustBePassportSeries';

describe('`mustBePassportSeries` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBePassportSeries(12345678)).toEqual(
      'Неверная серия. Введите корректную серию.',
    );
    expect(mustBePassportSeries(121)).toEqual(
      'Неверная серия. Введите корректную серию.',
    );
  });

  test('should return empty object if data is valid', () => {
    expect(mustBePassportSeries(1234)).toEqual(null);
  });
});
