import mustBeOGRN from './mustBeOGRN';

describe('mustBeOGRN', () => {
  it('должна возвращать null если value является валидным ОГРН', () => {
    expect(mustBeOGRN('1375748871189')).toEqual(null);
  });
});
