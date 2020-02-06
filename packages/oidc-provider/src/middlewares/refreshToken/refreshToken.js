const { authStrategyService } = require('../../services/authStrategy');

const { isActsTokenId } = require('./utils');

const refreshTokenMiddleware = () => (req, res, next) => {
  if (!req.isAuthenticated()) return next();

  const setTokenInfo = req.user.tokenSet;

  if (isActsTokenId(setTokenInfo.expires_at, setTokenInfo.expires_in)) {
    return next();
  }

  authStrategyService.authenticate('refreshToken')(req, res, next);
};

module.exports = refreshTokenMiddleware;
