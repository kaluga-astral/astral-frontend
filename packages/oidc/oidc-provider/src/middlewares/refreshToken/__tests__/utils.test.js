const { millisecondsToSeconds } = require('../../../utils/dateTime');
const { getExpiresConsideringClockSkew, isActsTokenId } = require('../utils');

describe('getExpiresConsideringClockSkew', () => {
  it('возвращает expires в миллисекундах с учетом clock skew', () => {
    const expiresAt = 200;
    const expiresIn = 100;
    const expectExpires = 180;

    expect(getExpiresConsideringClockSkew(expiresAt, expiresIn)).toBe(
      expectExpires,
    );
  });
});

describe('isActsTokenId', () => {
  it('утверждает, что id_token действителен', () => {
    const nowDate = new Date();
    // п
    const expiresAtTokenId = new Date(
      nowDate.getFullYear() + 1,
      1,
      1,
    ).getTime();
    const expiresInTokenId = 3600;

    expect(
      isActsTokenId(millisecondsToSeconds(expiresAtTokenId), expiresInTokenId),
    ).toBe(true);
  });

  it('утверждает, что id_token просрочен', () => {
    const expiresAtTokenId = new Date().getTime();
    const expiresInTokenId = 3600;

    expect(
      isActsTokenId(millisecondsToSeconds(expiresAtTokenId), expiresInTokenId),
    ).toBe(false);
  });
});
