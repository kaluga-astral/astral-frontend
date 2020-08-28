const httpLogger = require('./httpLogger');
const createHttpProxy = require('./httpProxy');
const errorLogger = require('./errorLogger');
const createMainErrorHandle = require('./mainErrorHandle');
const createOidcProtectedHttpProxy = require('./oidcProtectedHttpProxy');
const normalizeCookie = require('./normalizeCookie');

module.exports = {
  normalizeCookie,
  httpLogger,
  createHttpProxy,
  errorLogger,
  createMainErrorHandle,
  createOidcProtectedHttpProxy,
};
