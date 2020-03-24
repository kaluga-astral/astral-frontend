const { isEmpty } = require('lodash');

const { saveDesiredReferenceInCookie } = require('./utils');

const { serviceContext } = require('../../contexts');

const saveDesiredReferenceMiddleware = () => (req, res, next) => {
  const { oidcClient } = serviceContext.data;

  if (!isEmpty(oidcClient.callbackParams(req))) {
    return next();
  }

  // сохраняем в cookie desiredReference для того, чтобы после авторизации редиректнуть пользователя на тот route, на который он хотел попасть
  // без этого пользователь после авторизации будет всегда попадать на redirect_uri
  saveDesiredReferenceInCookie(req, res);

  next();
};

module.exports = saveDesiredReferenceMiddleware;
