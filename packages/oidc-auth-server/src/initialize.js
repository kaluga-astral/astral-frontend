const express = require('express');
const http = require('http');
const compression = require('compression');
const { initializeOidcProvider } = require('@astral-frontend/oidc-provider');

const { httpLogger, createOidcProtectedHttpProxy } = require('./middlewares');
const oidcProtectedSocketProxyCreator = require('./extensions/socket');

const { validateInitializeEntryParam } = require('./utils/validation');
const { prepareForStartServer } = require('./utils/httpServer');

const initializeServer = async entryParams => {
  // выдаст ошибку и завершит процесс, если какие-либо из входных параметров заданы неверно
  validateInitializeEntryParam(entryParams);

  const {
    storeConnectUrl,
    oidcParams,
    sessionParams,
    logoutRoutePath,
    getProfileRoutePath,
  } = entryParams;

  const app = express();

  app.disable('x-powered-by');

  app.use(httpLogger);

  app.use(compression());

  const {
    oidcProtected,
    logout,
    getProfile,
    socketConnectOidcProtected,
  } = await initializeOidcProvider({
    app,
    storeConnectUrl,
    oidcParams,
    sessionParams,
  });

  app.use(logoutRoutePath, logout);
  app.use(getProfileRoutePath, getProfile);

  // отдельно создается http server для того, чтобы слушать событие сокета upgrade (для express app событие upgrade работает не так, как ожидается)
  const server = http.createServer(app);

  const oidcProtectedHttpProxy = createOidcProtectedHttpProxy(oidcProtected);
  // создает и сразу подключает (в upgrade) socket proxy
  const createOidcProtectedSocketProxy = oidcProtectedSocketProxyCreator(
    server,
    socketConnectOidcProtected,
  );

  return {
    app,
    // при вызове startServer будут добавлены обработчики ошибок и запущен сервер на указанном порту
    startServer: prepareForStartServer(app, server),
    oidcProtectedHttpProxy,
    createOidcProtectedSocketProxy,
  };
};

module.exports = { initializeServer };
