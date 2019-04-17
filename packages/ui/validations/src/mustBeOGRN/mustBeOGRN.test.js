import mustBeOGRN from './mustBeOGRN';

describe('`mustBeOGRN` validation rule', () => {
  test('should return null if value is valid', () => {
    expect(mustBeOGRN(6405438323405)).toEqual(null);
  });
});
