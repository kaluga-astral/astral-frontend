const { createProxyMiddleware } = require('http-proxy-middleware');

const DEFAULT_PARAMS = {
  logLevel: 'debug',
};

const createHttpProxyMiddleware = params =>
  createProxyMiddleware({ ...DEFAULT_PARAMS, ...params });

module.exports = createHttpProxyMiddleware;
