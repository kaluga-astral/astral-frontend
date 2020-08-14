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

const validateOidcRedirectUri = redirectUri => {
  if (new URL(redirectUri).pathname === '/') {
    throwValidationError(
      'Pathname переданного параметра oidcParams.redirectUri должен отличаться от "/"',
    );
  }
};

const validateOidcEntryParams = oidcParams => {
  validateObject(
    oidcParams,
    OIDC_ENTRY_PARAMS_VALIDATION_SCHEME,
    'Ошибка в переданных oidcParams',
  );

  validateOidcRedirectUri(oidcParams.redirectUri);
};

const validateSessionEntryParams = sessionParams =>
  validateObject(
    sessionParams,
    SESSION_ENTRY_PARAMS_VALIDATION_SCHEME,
    'Ошибка в переданных sessionParams',
  );

const validateInitializeEntryParam = ({
  app,
  storeConnectUrl,
  oidcParams,
  sessionParams,
}) => {
  if (!app) {
    throwValidationError('Во входных параметрах отсутствует app (express)');
  }

  if (!storeConnectUrl) {
    throwValidationError(
      'Во входных параметрах отсутствует storeConnectUrl (ссылка на Redis)',
    );
  }

  validateOidcEntryParams(oidcParams);
  validateSessionEntryParams(sessionParams);
};

module.exports = {
  validateObject,
  validateInitializeEntryParam,
  validateSessionEntryParams,
};
