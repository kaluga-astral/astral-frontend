import mustBePassportSeries, { ERROR_MESSAGE } from './mustBePassportSeries';

describe('`mustBePassportSeries` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBePassportSeries(12345678)).toEqual(ERROR_MESSAGE);
    expect(mustBePassportSeries(121)).toEqual(ERROR_MESSAGE);
  });

  test('should return empty object if data is valid', () => {
    expect(mustBePassportSeries(1234)).toEqual(null);
  });
});
