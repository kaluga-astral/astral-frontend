const authStrategyService = require('passport');
const { Strategy: CustomStrategy } = require('passport-custom');
const { Strategy: OidcStrategy } = require('openid-client');

const { lockResource, unlockResource } = require('../services/syncRequests');

const { updateSessionExpires } = require('../utils/cookie');

const { serviceContext, oidcContext } = require('../contexts');

const {
  AUTH_STRATEGY_NAME,
  REFRESH_TOKEN_STRATEGY_NAME,
} = require('../config/authStrategies');
const { REFRESH_TOKEN_RESOURCE_NAME } = require('../config/syncRequests');

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
  const { oidcClient, storeClient, storePublisher } = serviceContext.data;
  const { refreshTokenMaxAge } = oidcContext.data;

  const refreshTokenStrategy = new CustomStrategy(async (req, done) => {
    const setTokenInfo = req.user.tokenSet;

    try {
      // для данной сессии блокируем (ставим в ожидание) все запросы на рефреш токена
      lockResource(storeClient, REFRESH_TOKEN_RESOURCE_NAME, req);

      const newTokenSet = await oidcClient.refresh(setTokenInfo.refresh_token);

      updateSessionExpires(req, refreshTokenMaxAge);

      // странное поведение CustomStrategy: если вызвать про done(null, user), то эти данные не сохраняются ни локально, ни в store
      // поэтому изменяю информацию о юзере в памяти и по завершению запроса express-session сама вызовет req.session.save и синхронизирует данные с store (Redis)
      req.user.tokenSet = {
        ...newTokenSet,
        expires_in: newTokenSet.expires_in,
      };

      req.session.save(async err => {
        await unlockResource({
          storeClient,
          storePublisher,
          req,
          resourceName: REFRESH_TOKEN_RESOURCE_NAME,
        });

        if (err) return done(err);

        done(null, req.user);
      });
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
