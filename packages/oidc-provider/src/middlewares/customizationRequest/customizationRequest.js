const {
  updateSessionExpires,
  deleteReqHeadersCookie,
} = require('../../utils/cookie');
const { setTokenHeader } = require('./utils');

const { oidcContext } = require('../../contexts');

const {
  SESSION_COOKIE_KEY,
  DESIRED_REFERENCE_KEY,
} = require('../../config/session');

const SESSION_INFO_FIELDS = [SESSION_COOKIE_KEY, DESIRED_REFERENCE_KEY];

const customizationRequestMiddleware = () => (req, res, next) => {
  if (!req.session.cookie.expires) {
    const { refreshTokenMaxAge } = oidcContext.data;

    // устанавливаем expires, если его нет
    updateSessionExpires(req, refreshTokenMaxAge);
  }

  // данные о сессии нужны только для этого proxy
  deleteReqHeadersCookie(req, SESSION_INFO_FIELDS);

  // добавляем в headers id_token
  setTokenHeader(req);

  next();
};

module.exports = customizationRequestMiddleware;
