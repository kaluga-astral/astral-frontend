const validator = require('@hapi/joi');

const INITIALIZE_ENTRY_PARAMS_VALIDATION_SCHEME = {
  internalErrorTemplatePath: validator.string().required(),
  logoutRoutePath: validator.string().required(),
  getProfileRoutePath: validator.string().required(),
  storeConnectUrl: validator
    .string()
    .uri()
    .required(),
  oidcParams: validator.object().required(),
  sessionParams: validator.object().required(),
  socketProtectedProxyTarget: validator.string().uri(),
  httpProtectedProxyConfigs: validator.array().items(
    validator
      .object({
        entry: validator
          .array()
          .items(validator.string().required())
          .required(),
        target: validator
          .string()
          .uri()
          .required(),
        changeOrigin: validator.boolean(),
      })
      .unknown(false),
  ),
};

module.exports = { INITIALIZE_ENTRY_PARAMS_VALIDATION_SCHEME };
