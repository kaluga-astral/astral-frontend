import mustBePresent from './mustBePresent';

describe('` mustBePresent` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBePresent('')).toEqual('Обязательно для заполнения');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBePresent(11697338589)).toEqual(null);
  });
});
