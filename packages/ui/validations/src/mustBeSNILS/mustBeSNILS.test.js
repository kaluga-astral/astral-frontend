import mustBeSNILS from './mustBeSNILS';

describe('` mustBeSNILS` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeSNILS(123456789)).toEqual('Неверный СНИЛС. Введите корректный СНИЛС.');
    expect(mustBeSNILS(134678)).toEqual('Неверный СНИЛС. Введите корректный СНИЛС.');
  });
  test('should return empty object if data is valid', () => {
    expect(mustBeSNILS(11697338589)).toEqual(null);
  });
});
