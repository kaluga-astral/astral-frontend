const cookieParser = require('cookie-parser');

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

  const { client: oidcClient } = await connectIdentity(oidcParams);

  // регистрация passport стратегий
  registerOidcAuthStrategy(oidcClient, oidcSessionKey);
  registerRefreshTokenStrategy(oidcClient);

  app.use(cookieParser());

  app.use(createSession({ store, ...sessionParams }));

  // Initialize Passport
  app.use(authStrategyService.initialize());
  app.use(authStrategyService.session());

  return {
    oidcProtected: createOidcProtectedMiddleware({ oidcClient, sessionParams }),
  };
};

module.exports = { initializeOidcProvider };
