const authStrategyService = require('passport');
const { Strategy: CustomStrategy } = require('passport-custom');
const { Strategy: OidcStrategy } = require('openid-client');

const { updateSessionExpires } = require('../utils/cookie');

const { serviceContext, oidcContext } = require('../contexts');

const {
  AUTH_STRATEGY_NAME,
  REFRESH_TOKEN_STRATEGY_NAME,
} = require('../config/authStrategies');

authStrategyService.serializeUser((user, done) => {
  done(null, user);
});

authStrategyService.deserializeUser((user, done) => {
  done(null, user);
});

const registerOidcAuthStrategy = () => {
  const { oidcClient } = serviceContext.data;
  const { clientConfig, oidcSessionKey } = oidcContext.data;

  const oidcStrategy = new OidcStrategy(
    {
      client: oidcClient,
      params: clientConfig,
      sessionKey: oidcSessionKey,
    },
    (tokenSet, userInfo, done) => {
      done(null, {
        id: userInfo.sub,
        // expires_in находится в прототипе, поэтому просто присвоить не получится
        tokenSet: { ...tokenSet, expires_in: tokenSet.expires_in },
        ...userInfo,
      });
    },
  );

  authStrategyService.use(AUTH_STRATEGY_NAME, oidcStrategy);
};

const registerRefreshTokenStrategy = () => {
  const { oidcClient } = serviceContext.data;
  const { refreshTokenMaxAge } = oidcContext.data;

  const refreshTokenStrategy = new CustomStrategy(async (req, done) => {
    const setTokenInfo = req.user.tokenSet;

    try {
      const newTokenSet = await oidcClient.refresh(setTokenInfo.refresh_token);

      req.session.regenerate(() => {
        done(null, { ...req.user, tokenSet: newTokenSet });
      });

      updateSessionExpires(req, refreshTokenMaxAge);
    } catch (err) {
      done(err);
    }
  });

  authStrategyService.use(REFRESH_TOKEN_STRATEGY_NAME, refreshTokenStrategy);
};

module.exports = {
  authStrategyService,
  registerOidcAuthStrategy,
  registerRefreshTokenStrategy,
};
