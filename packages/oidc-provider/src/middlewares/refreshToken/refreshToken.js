const { authStrategyService } = require('../../services/authStrategy');
const { pauseReqLockedResource } = require('../../services/syncRequests');

const {
  saveDesiredReferenceInCookie,
} = require('../saveDesiredReference/utils');
const { isActsTokenId } = require('./utils');

const { serviceContext } = require('../../contexts');

const { REFRESH_TOKEN_STRATEGY_NAME } = require('../../config/authStrategies');
const { REFRESH_TOKEN_RESOURCE_NAME } = require('../../config/syncRequests');

const defaultRefreshErrorHandler = (req, res) => {
  // если рефреш завершился неудачей, необходимо запомнить текущий path пользователя, чтобы вернуть его сюда после авторизации
  saveDesiredReferenceInCookie(req, res);
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

  const refreshTokenCb = async err => {
    // если произошла ошибка, значит refresh_token недействителен
    // после logout - request попадет в oidcAuthStrategy
    if (err) {
      // TODO: сделать логирование ошибки при рефреше
      await req.logout();

      refreshErrorHandler(req, res);
    }

    next();
  };

  authStrategyService.authenticate(REFRESH_TOKEN_STRATEGY_NAME, refreshTokenCb)(
    req,
    res,
    next,
  );
};

module.exports = createRefreshTokenMiddleware;
