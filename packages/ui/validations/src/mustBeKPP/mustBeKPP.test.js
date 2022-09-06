import mustBeKPP, { ERROR_MESSAGE } from './mustBeKPP';

describe('`mustBeKPP` validation rule', () => {
  test('should return error object if data is valid', () => {
    expect(mustBeKPP(7736)).toEqual(ERROR_MESSAGE);
    expect(mustBeKPP(9999999999)).toEqual(ERROR_MESSAGE);
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeKPP(773601001)).toEqual(null);
    expect(mustBeKPP('7736AD001')).toEqual(null);
  });
});
