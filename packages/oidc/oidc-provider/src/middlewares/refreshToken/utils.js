const { secondsToMilliseconds } = require('../../utils/dateTime');

const { TOKEN_CLOCK_SKEW_PERCENT } = require('../../config/session');

const getExpiresConsideringClockSkew = (expiresAt, expiresIn) => {
  const diffValue = expiresIn * (TOKEN_CLOCK_SKEW_PERCENT / 100);

  return expiresAt - diffValue;
};

// expiresInTokenId жизнь токена в секундах от выдачи токена
const isActsTokenId = (expiresAt, expiresIn) => {
  // существует clock skew - сдвиг времени. Если его не учитывать токен может стухнуть раньше, чем мы ожидаем
  return (
    Date.now() <
    getExpiresConsideringClockSkew(
      secondsToMilliseconds(expiresAt),
      secondsToMilliseconds(expiresIn),
    )
  );
};

module.exports = { getExpiresConsideringClockSkew, isActsTokenId };
