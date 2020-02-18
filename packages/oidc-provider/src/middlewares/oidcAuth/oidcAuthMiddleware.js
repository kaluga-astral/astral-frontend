const { authStrategyService } = require('../../services/authStrategy');

const { isActingUrlOidcParams, clearQueryParams } = require('./utils');

const { AUTH_STRATEGY_NAME } = require('../../config/authStrategies');

const oidcAuthMiddleware = (oidcClient, oidcSessionKey) => (req, res, next) => {
  // обход либы oidc-client (выкидывает exception, если хранилище пустое, а параметры oidc присутствуют)
  // определяем, что oidc параметры не актуальны и удаляем их из request для того, чтобы был произведен редирект на авторизацию
  if (!isActingUrlOidcParams(req, oidcClient, oidcSessionKey)) {
    clearQueryParams(req);
  }

  const authCb = (err, user, info) => {
    if (err) return next(err);

    if (info.error) return next(new Error(info.error));

    req.logIn(user, logInErr => {
      if (logInErr) return next(logInErr);

      next();
    });
  };

  authStrategyService.authenticate(AUTH_STRATEGY_NAME, authCb)(req, res, next);
};

module.exports = oidcAuthMiddleware;
