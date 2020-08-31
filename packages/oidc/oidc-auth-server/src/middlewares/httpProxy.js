const { createProxyMiddleware } = require('http-proxy-middleware');
const { compose } = require('compose-middleware');

const normalizeCookie = require('./normalizeCookie');

const DEFAULT_PARAMS = {
  logLevel: 'debug',
  ws: false,
};

const createHttpProxyMiddleware = params =>
  compose([
    // normalizeCookie здесь необходим для того, чтобы производить перезапись невалидных значений cookie
    normalizeCookie,
    createProxyMiddleware({ ...DEFAULT_PARAMS, ...params }),
  ]);

module.exports = createHttpProxyMiddleware;
