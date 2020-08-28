const { compose } = require('compose-middleware');

const createHttpProxy = require('./httpProxy');
const normalizeCookie = require('./normalizeCookie');

// normalizeCookie здесь необходим для того, чтобы производить перезапись невалидный значений cookie
const createOidcProtectedHttpProxy = oidcProtected => proxyParams =>
  compose([oidcProtected, normalizeCookie, createHttpProxy(proxyParams)]);

module.exports = createOidcProtectedHttpProxy;
