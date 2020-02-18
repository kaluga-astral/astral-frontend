const authStrategyService = require('passport');
const { Strategy: CustomStrategy } = require('passport-custom');
const { Strategy: OidcStrategy } = require('openid-client');

const { updateSessionExpires } = require('../utils/cookie');

authStrategyService.serializeUser((user, done) => {
  done(null, user);
});

authStrategyService.deserializeUser((user, done) => {
  done(null, user);
});

const registerOidcAuthStrategy = (
  oidcClient,
  oidcClientConfig,
  oidcSessionKey,
) => {
  const oidcStrategy = new OidcStrategy(
    {
      client: oidcClient,
      params: oidcClientConfig,
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

  authStrategyService.use('oidcAuth', oidcStrategy);
};

const registerRefreshTokenStrategy = (oidcClient, refreshTokenMaxAge) => {
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

  authStrategyService.use('refreshToken', refreshTokenStrategy);
};

module.exports = {
  authStrategyService,
  registerOidcAuthStrategy,
  registerRefreshTokenStrategy,
};
