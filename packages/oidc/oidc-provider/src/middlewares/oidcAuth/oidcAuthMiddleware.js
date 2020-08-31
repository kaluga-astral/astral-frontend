const { authStrategyService } = require('../../services/authStrategy');
const logger = require('../../services/logger');

const { isActingUrlOidcParams, clearQueryParams } = require('./utils');

const { serviceContext, oidcContext } = require('../../contexts');

const { AUTH_STRATEGY_NAME } = require('../../config/authStrategies');

const oidcAuthMiddleware = (req, res, next) => {
  const { oidcClient } = serviceContext.data;
  const { oidcSessionKey } = oidcContext.data;

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

      logger.info(req, 'Авторизация прошла успешно');

      next();
    });
  };

  authStrategyService.authenticate(AUTH_STRATEGY_NAME, authCb)(req, res, next);
};

module.exports = oidcAuthMiddleware;
