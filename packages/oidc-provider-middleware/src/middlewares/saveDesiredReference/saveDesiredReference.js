const { isEmpty } = require('lodash');

const {
  DESIRED_REFERENCE_MAX_AGE,
  DESIRED_REFERENCE_KEY,
} = require('../../config/session');

const saveDesiredReferenceMiddleware = oidcClient => (req, res, next) => {
  if (!isEmpty(oidcClient.callbackParams(req))) {
    return next();
  }

  // сохраняем в cookie desiredReference для того, чтобы после авторизации редиректнуть пользователя на тот route, на который он хотел попасть
  // без этого пользователь после авторизации будет всегда попадать на redirect_uri
  res.cookie(DESIRED_REFERENCE_KEY, req.url, {
    maxAge: DESIRED_REFERENCE_MAX_AGE,
  });

  next();
};

module.exports = saveDesiredReferenceMiddleware;
