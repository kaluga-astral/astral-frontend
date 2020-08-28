const skipAuth = require('./skipAuth');
const checkForAuthRedirect = require('./checkForAuthRedirect');
const createSession = require('./createSession');
const oidcAuth = require('./oidcAuth');
const customizationRequest = require('./customizationRequest');
const refreshToken = require('./refreshToken');
const saveDesiredReference = require('./saveDesiredReference');
const redirectToDesiredReference = require('./redirectToDesiredReference');
const oidcProtected = require('./oidcProtected');
const logout = require('./logout');
const getProfile = require('./getProfile');

module.exports = {
  skipAuth,
  checkForAuthRedirect,
  createSession,
  oidcAuth,
  customizationRequest,
  refreshToken,
  saveDesiredReference,
  redirectToDesiredReference,
  oidcProtected,
  logout,
  getProfile,
};
