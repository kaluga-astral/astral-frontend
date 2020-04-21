const express = require('express');
const http = require('http');
const compression = require('compression');
const { initializeOidcProvider } = require('@astral-frontend/oidc-provider');

const {
  httpLogger,
  createHttpProxy,
  errorLogger,
  mainErrorHandle,
} = require('./middlewares');

const { validateInitializeEntryParam } = require('./utils/validation');

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
};

module.exports = { initializeServer };
