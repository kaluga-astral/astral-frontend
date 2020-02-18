const { authStrategyService } = require('../../services/authStrategy');

const {
  saveDesiredReferenceInCookie,
} = require('../saveDesiredReference/utils');

const { isActsTokenId } = require('./utils');

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

      saveDesiredReferenceInCookie(req, res);
    }

    next();
  };

  authStrategyService.authenticate('refreshToken', refreshTokenCb)(
    req,
    res,
    next,
  );
};

module.exports = refreshTokenMiddleware;
