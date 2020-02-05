const { secondsToMilliseconds } = require('../../utils/dateTime');

const { TOKEN_CLOCK_SKEW_PERCENT } = require('../../config/session');

const getExpiresConsideringClockSkew = (expiresAt, expiresIn) => {
  const diffValue = expiresIn * (TOKEN_CLOCK_SKEW_PERCENT / 100);

  return expiresAt - diffValue;
};

// expiresInTokenId жизнь токена в секундах от выдачи токена
const isActsTokenId = (expiresAt, expiresIn) => {
  const nowDate = new Date();

  // существует clock skew - двиг времени для улучшения безопасности. Если его не учитывать токен может стухнуть раньше, чем мы ожидаем
  return (
    nowDate.getTime() <
    getExpiresConsideringClockSkew(
      secondsToMilliseconds(expiresAt),
      secondsToMilliseconds(expiresIn),
    )
  );
};

module.exports = { getExpiresConsideringClockSkew, isActsTokenId };
