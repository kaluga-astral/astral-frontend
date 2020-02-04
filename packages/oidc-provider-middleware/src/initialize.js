const cookieParser = require('cookie-parser');

const { createSession } = require('./middlewares');

const {
  authStrategyService,
  registerOidcAuthStrategy,
  registerRefreshTokenStrategy,
} = require('./services/authStrategy');
const { connectIdentity } = require('./services/oidc');

const { validateInitializeEntryParam } = require('./utils/validation');

const initializeOidcProvider = async entryParams => {
  // выдаст ошибку и завершит процесс, если какие-либо из входных параметров заданы неверно
  validateInitializeEntryParam(entryParams);

  const { app, store, oidcParams } = entryParams;

  const { client: oidcClient } = await connectIdentity(oidcParams);

  // регистрация passport стратегий
  registerOidcAuthStrategy(oidcClient, oidcParams.clientId);
  registerRefreshTokenStrategy(oidcClient);

  app.use(cookieParser());

  app.use(createSession(store));

  // Initialize Passport
  app.use(authStrategyService.initialize());
  app.use(authStrategyService.session());
};

module.exports = { initializeOidcProvider };
