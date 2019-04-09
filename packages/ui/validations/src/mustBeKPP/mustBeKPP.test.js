import mustBeKPP from './mustBeKPP';

describe('`mustBeKPP` validation rule', () => {
  test('should return empty object if data is valid', () => {
    expect(mustBeKPP(773601001)).toEqual(null);
  });
});
