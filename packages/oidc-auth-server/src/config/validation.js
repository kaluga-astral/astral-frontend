const validator = require('@hapi/joi');

const INITIALIZE_ENTRY_PARAMS_VALIDATION_SCHEME = {
  internalErrorTemplatePath: validator.string().required(),
  logoutRoutePath: validator.string().required,
  getProfileRoutePath: validator.string().required,
  storeConnectUrl: validator.uri().required,
  oidcParams: validator.object().required,
  sessionParams: validator.object().required,
};

module.exports = { INITIALIZE_ENTRY_PARAMS_VALIDATION_SCHEME };
