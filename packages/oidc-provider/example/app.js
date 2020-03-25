const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { initializeOidcProvider } = require('@astral-frontend/oidc-provider');

const { createMockApi } = require('./__mocks__/api');

const { httpProxy, httpLogger, errorLogger } = require('./middlewares');

const { connectStore } = require('./services/store');

const PROXY_MOCK_PORT = 3001;
const SERVER_PORT = 3000;

const OIDC_PARAMS = {
  identityUrl: 'https://identity.demo.astral-dev.ru',
  clientId: 'example_code_flow',
  clientSecret: 'secret',
  redirectUri: 'http://localhost:3000',
  postLogoutRedirectUri: 'http://localhost:3000',
  scope: 'profile email',
  refreshTokenMaxAge: 2592000,
};

const SESSION_PARAMS = {
  sessionSecret: 'sessionSecret',
};

// для тестов
createMockApi(PROXY_MOCK_PORT);

const initializeServer = async () => {
  const app = express();
  const store = connectStore();

  app.use(httpLogger);

  app.use(compression());
  app.use(cookieParser());

  const { oidcProtected, logout, getProfile } = await initializeOidcProvider({
    app,
    store,
    oidcParams: OIDC_PARAMS,
    sessionParams: SESSION_PARAMS,
  });

  app.use('/main', oidcProtected, (req, res, next) => {
    httpProxy(req, res, next);
  });

  app.post('/account/logout', logout);

  app.get('/account/profile', getProfile);

  app.use(errorLogger);

  app.listen(SERVER_PORT, err => {
    if (err) {
      console.error(err);

      process.exit(1);
    }

    console.log(`Oidc provider listening on port ${SERVER_PORT}`);
  });
};

initializeServer();
