const validator = require('@hapi/joi');

const { OIDC_ENTRY_PARAMS_VALIDATION_SCHEME } = require('../../config/oidc');

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

const validateInitializeEntryParam = ({ app, store, oidcParams }) => {
  if (!app) {
    throwValidationError('Во входных параметрах отсутсвует app (express)');
  }

  if (!store) {
    throwValidationError('Во входных параметрах отсутсвует store (Redis)');
  }

  validateOidcEntryParams(oidcParams);
};

module.exports = { validateObject, validateInitializeEntryParam };
