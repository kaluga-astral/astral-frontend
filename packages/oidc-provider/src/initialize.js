const { compose } = require('compose-middleware');

const {
  createSession,
  oidcProtected,
  logout,
  getProfile,
} = require('./middlewares');

const { connectStore } = require('./services/store');
const { subscribeToSyncReqChannel } = require('./services/syncRequests');
const {
  authStrategyService,
  registerOidcAuthStrategy,
  registerRefreshTokenStrategy,
} = require('./services/authStrategy');
const { connectIdentity } = require('./services/oidc');

const { validateInitializeEntryParam } = require('./utils/validation');
const { generateOidcSessionKey, getOidcClientConfig } = require('./utils/oidc');

const { serviceContext, oidcContext, sessionContext } = require('./contexts');

const initializeOidcProvider = async entryParams => {
  // выдаст ошибку и завершит процесс, если какие-либо из входных параметров заданы неверно
  validateInitializeEntryParam(entryParams);

  const { app, storeConnectUrl, oidcParams, sessionParams } = entryParams;

  const {
    store,
    client: storeClient,
    subscriber: storeSubscriber,
    publisher: storePublisher,
  } = connectStore(storeConnectUrl);
  // создаем канал для синхронизации запросов. Необходимость синхронизации описана в README
  await subscribeToSyncReqChannel(storeSubscriber);

  const oidcSessionKey = generateOidcSessionKey(oidcParams.clientId);
  const oidcClientConfig = getOidcClientConfig(oidcParams);
  const successAuthRedirectRoute = new URL(oidcParams.redirectUri).pathname;

  const { client: oidcClient } = await connectIdentity(
    oidcParams,
    oidcClientConfig,
  );

  // инициализация контекстов. За счет использования контекстов отпадает необходимость передавать общие данные через параметры вложенных цепочек функций
  serviceContext.updateData({
    store,
    storeClient,
    storeSubscriber,
    storePublisher,
    oidcClient,
  });
  oidcContext.updateData({
    ...oidcParams,
    oidcSessionKey,
    clientConfig: oidcClientConfig,
  });
  sessionContext.updateData(sessionParams);

  // регистрация passport стратегий
  registerOidcAuthStrategy();
  registerRefreshTokenStrategy();

  app.use(createSession());

  // Initialize Passport
  app.use(authStrategyService.initialize());
  app.use(authStrategyService.session());

  // url, на который Identity произведет редирект после успешной авторизации, должен быть защищен
  app.use(successAuthRedirectRoute, oidcProtected);

  return {
    oidcProtected,
    // logout должен работать только для авторизованного пользователя
    logout: compose([oidcProtected, logout]),
    // получения пользовательских данных должно работать только для авторизованного пользователя
    getProfile: compose([oidcProtected, getProfile]),
    storeClient,
  };
};

module.exports = { initializeOidcProvider };
