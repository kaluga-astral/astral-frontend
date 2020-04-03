const express = require('express');
const http = require('http');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { initializeOidcProvider } = require('@astral-frontend/oidc-provider');

const { createMockApi } = require('./__mocks__/api');

const { httpLogger, errorLogger } = require('./middlewares');

const PROXY_MOCK_PORT = 3001;
const SERVER_PORT = 3000;
const STORE_CONNECT_URL = 'http://10.0.3.9:5703';

const OIDC_PARAMS = {
  identityUrl: 'https://identity.demo.astral-dev.ru',
  clientId: 'example_code_flow',
  clientSecret: 'secret',
  redirectUri: 'http://localhost:3000/auth/cb',
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

  app.use(httpLogger);

  app.use(compression());
  app.use(cookieParser());

  const {
    oidcProtected,
    logout,
    getProfile,
    socketConnectOidcProtected,
  } = await initializeOidcProvider({
    app,
    storeConnectUrl: STORE_CONNECT_URL,
    oidcParams: OIDC_PARAMS,
    sessionParams: SESSION_PARAMS,
  });
  const wsProxy = createProxyMiddleware({
    target: 'http://localhost:3001',
    ws: true,
    level: 'debug',
  });

  app.use(
    '/main',
    oidcProtected,
    createProxyMiddleware({ target: 'http://localhost:3001', level: 'debug' }),
  );

  app.post('/account/logout', logout);

  app.get('/account/profile', getProfile);

  app.use(errorLogger);

  const server = http.createServer(app);

  server.on('upgrade', socketConnectOidcProtected(wsProxy.upgrade));

  server.listen(SERVER_PORT, err => {
    if (err) {
      console.error(err);

      process.exit(1);
    }

    console.log(`Oidc provider listening on port ${SERVER_PORT}`);
  });
};

initializeServer();
