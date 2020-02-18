const { authStrategyService } = require('../../services/authStrategy');

const {
  saveDesiredReferenceInCookie,
} = require('../saveDesiredReference/utils');
const { isActsTokenId } = require('./utils');

const { REFRESH_TOKEN_STRATEGY_NAME } = require('../../config/authStrategies');

const refreshTokenMiddleware = () => (req, res, next) => {
  if (!req.isAuthenticated()) return next();

  const setTokenInfo = req.user.tokenSet;

  if (isActsTokenId(setTokenInfo.expires_at, setTokenInfo.expires_in)) {
    return next();
  }

  const refreshTokenCb = async err => {
    // если произошла ошибка, значит refresh_token недействителен
    // после logout - request попадет в oidcAuthStrategy
    if (err) {
      await req.logout();

      // также будет необходимо вернуться на текущий route
      saveDesiredReferenceInCookie(req, res);
    }

    next();
  };

  authStrategyService.authenticate(REFRESH_TOKEN_STRATEGY_NAME, refreshTokenCb)(
    req,
    res,
    next,
  );
};

module.exports = refreshTokenMiddleware;
