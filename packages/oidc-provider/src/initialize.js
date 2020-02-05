const {
  createSession,
  createOidcProtectedMiddleware,
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

  const oidcProtectedMiddleware = createOidcProtectedMiddleware({
    oidcClient,
    oidcParams,
    oidcSessionKey,
    sessionParams,
  });

  // регистрация passport стратегий
  registerOidcAuthStrategy(oidcClient, oidcSessionKey);
  registerRefreshTokenStrategy(oidcClient);

  app.use(createSession({ store, ...sessionParams }));

  // Initialize Passport
  app.use(authStrategyService.initialize());
  app.use(authStrategyService.session());

  // необходимо обрабатывать url, на который Identity произведет редирект после успешной авторизации
  app.use(successAuthRedirectRoute, oidcProtectedMiddleware);

  return {
    oidcProtected: oidcProtectedMiddleware,
  };
};

module.exports = { initializeOidcProvider };
