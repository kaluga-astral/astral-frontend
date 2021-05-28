import mustBeDatePeriod from './mustBeDatePeriod';

describe('` mustBePresent` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeDatePeriod('1000', '2019', '2017')).toEqual(
      'Дата имеет недопустимое значение',
    );
    expect(mustBeDatePeriod('1000', '0001', '2017')).toEqual(
      'Дата имеет недопустимое значение',
    );
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeDatePeriod('1000', '2019', '2020')).toEqual(null);
    expect(mustBeDatePeriod('1000', '1000', '2017')).toEqual(null);
    expect(mustBeDatePeriod('1000', '2017', '2017')).toEqual(null);
  });
});
