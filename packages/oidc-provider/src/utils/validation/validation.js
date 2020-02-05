const validator = require('@hapi/joi');

const { OIDC_ENTRY_PARAMS_VALIDATION_SCHEME } = require('../../config/oidc');
const {
  SESSION_ENTRY_PARAMS_VALIDATION_SCHEME,
} = require('../../config/session');

const throwValidationError = errorText => {
  console.error(errorText);

  process.exit(1);
};

const validateObject = (
  validatedObject,
  validationScheme,
  errorBaseMessage,
) => {
  const { error, ...envVars } = validator
    .object(validationScheme)
    .validate(validatedObject);

  if (error) {
    throwValidationError(`${errorBaseMessage}: ${error.message}`);
  }

  return envVars;
};

const validateOidcEntryParams = oidcParams =>
  validateObject(
    oidcParams,
    OIDC_ENTRY_PARAMS_VALIDATION_SCHEME,
    'Ошибка в переданных oidcParams',
  );

const validateSessionEntryParams = sessionParams =>
  validateObject(
    sessionParams,
    SESSION_ENTRY_PARAMS_VALIDATION_SCHEME,
    'Ошибка в переданных sessionParams',
  );

const validateInitializeEntryParam = ({
  app,
  store,
  oidcParams,
  sessionParams,
}) => {
  if (!app) {
    throwValidationError('Во входных параметрах отсутсвует app (express)');
  }

  if (!store) {
    throwValidationError('Во входных параметрах отсутсвует store (Redis)');
  }

  validateOidcEntryParams(oidcParams);
  validateSessionEntryParams(sessionParams);
};

module.exports = {
  validateObject,
  validateInitializeEntryParam,
  validateSessionEntryParams,
};
