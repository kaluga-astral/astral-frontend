const { isEmpty } = require('lodash');

const { OIDC_SESSION_KEY } = require('../../config/oidc');

const isActingUrlOidcParams = (req, oidcClient) => {
  const oidcParams = oidcClient.callbackParams(req);

  // если в строке запроса есть параметры, относящиеся к oidc и в хранилище сессий нет данных (каждый раз после успешного получения данных из сесси она очищается)
  // то эти параметры можно считать неактуфльными и необходимо перенаправить пользователя на повторную авторизацию
  return !isEmpty(oidcParams) && !isEmpty(req.session[OIDC_SESSION_KEY]);
};

const clearQueryParams = req => {
  req.query = {};
  req.params = {};
  req.url = '/';
};

module.exports = { isActingUrlOidcParams, clearQueryParams };
