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

const registerOidcAuthStrategy = (oidcClient, oidcSessionKey) => {
  const oidcStrategy = new OidcStrategy(
    {
      client: oidcClient,
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

const registerRefreshTokenStrategy = oidcClient => {
  const refreshTokenStrategy = new CustomStrategy(async (req, done) => {
    const setTokenInfo = req.user.tokenSet;

    try {
      const newTokenSet = await oidcClient.refresh(setTokenInfo.refresh_token);

      req.session.regenerate(() => {
        done(null, { ...req.user, tokenSet: newTokenSet });
      });

      updateSessionExpires(req);
    } catch (err) {
      // если произошла ошибка, значит refresh_token недействителен
      // после logout - request попадет в oidcAuthStrategy
      await req.logout();

      done(null);
    }
  });

  authStrategyService.use('refreshToken', refreshTokenStrategy);
};

module.exports = {
  authStrategyService,
  registerOidcAuthStrategy,
  registerRefreshTokenStrategy,
};
