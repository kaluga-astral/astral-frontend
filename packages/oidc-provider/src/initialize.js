const { compose } = require('compose-middleware');

const {
  createSession,
  oidcProtected: createOidcProtectedMiddleware,
  logout: createLogoutMiddleware,
} = require('./middlewares');

const {
  authStrategyService,
  registerOidcAuthStrategy,
  registerRefreshTokenStrategy,
} = require('./services/authStrategy');
const { connectIdentity } = require('./services/oidc');

const { validateInitializeEntryParam } = require('./utils/validation');
const { generateOidcSessionKey } = require('./utils/oidc');

const initializeOidcProvider = async entryParams => {
  // выдаст ошибку и завершит процесс, если какие-либо из входных параметров заданы неверно
  validateInitializeEntryParam(entryParams);

  const { app, store, oidcParams, sessionParams } = entryParams;
  const oidcSessionKey = generateOidcSessionKey(oidcParams.clientId);
  const successAuthRedirectRoute = new URL(oidcParams.redirectUri).pathname;

  const { client: oidcClient } = await connectIdentity(oidcParams);

  const oidcProtected = createOidcProtectedMiddleware({
    oidcClient,
    oidcParams,
    oidcSessionKey,
    sessionParams,
  });
  const logout = createLogoutMiddleware(oidcClient);

  // регистрация passport стратегий
  registerOidcAuthStrategy(oidcClient, oidcSessionKey);
  registerRefreshTokenStrategy(oidcClient);

  app.use(createSession({ store, ...sessionParams }));

  // Initialize Passport
  app.use(authStrategyService.initialize());
  app.use(authStrategyService.session());

  // url, на который Identity произведет редирект после успешной авторизации, должен быть защищен
  app.use(successAuthRedirectRoute, oidcProtected);

  return {
    oidcProtected,
    // logout должен работать только для авторизованного пользователя
    logout: compose([oidcProtected, logout]),
  };
};

module.exports = { initializeOidcProvider };
