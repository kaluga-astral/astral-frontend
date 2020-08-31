const { authStrategyService } = require('../../services/authStrategy');
const { pauseReqLockedResource } = require('../../services/syncRequests');

const {
  saveDesiredReferenceInCookie,
} = require('../saveDesiredReference/utils');
const { isActsTokenId } = require('./utils');

const logger = require('../../services/logger');

const { serviceContext, oidcContext } = require('../../contexts');

const { REFRESH_TOKEN_STRATEGY_NAME } = require('../../config/authStrategies');
const { REFRESH_TOKEN_RESOURCE_NAME } = require('../../config/syncRequests');

const defaultRefreshErrorHandler = (req, res) => {
  const { fallbackDesiredReference } = oidcContext.data;

  // если рефреш завершился неудачей, необходимо запомнить текущий path пользователя, чтобы вернуть его сюда после авторизации
  saveDesiredReferenceInCookie(req, res, fallbackDesiredReference);
};

const createRefreshTokenMiddleware = (
  refreshErrorHandler = defaultRefreshErrorHandler,
) => async (req, res, next) => {
  if (!req.isAuthenticated()) return next();

  const { storeClient, storeSubscriber } = serviceContext.data;

  // если сейчас с текущей сессии выполняется какой либо запрос на рефреш, то ждет его выполнения
  await pauseReqLockedResource(
    storeClient,
    storeSubscriber,
    REFRESH_TOKEN_RESOURCE_NAME,
    req,
  );

  const setTokenInfo = req.user.tokenSet;

  if (isActsTokenId(setTokenInfo.expires_at, setTokenInfo.expires_in)) {
    return next();
  }

  logger.info(req, 'Выполняется refresh');

  const refreshTokenCb = async err => {
    // если произошла ошибка, значит refresh_token недействителен
    // после logout - request попадет в oidcAuthStrategy
    if (err) {
      logger.error(
        req,
        `При выполнении refresh произошла ошибка ${err.message}`,
      );

      await req.logout();

      refreshErrorHandler(req, res);
    }

    logger.info(req, 'Refresh успешно завершен');

    next();
  };

  authStrategyService.authenticate(REFRESH_TOKEN_STRATEGY_NAME, refreshTokenCb)(
    req,
    res,
    next,
  );
};

module.exports = createRefreshTokenMiddleware;
