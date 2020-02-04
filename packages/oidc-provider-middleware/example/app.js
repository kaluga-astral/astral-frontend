const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const { createMockApi } = require('./__mocks__/api');

const { initializeOidcProvider } = require('../src');

const { OIDC_PARAMS } = require('./config/oidc');

const PROXY_MOCK_PORT = 3001;

// для тестов
createMockApi(PROXY_MOCK_PORT);

const initializeServer = async () => {
  const app = express();

  await initializeOidcProvider(app, { oidcParams: OIDC_PARAMS });
};

module.exports = { initializeServer };
