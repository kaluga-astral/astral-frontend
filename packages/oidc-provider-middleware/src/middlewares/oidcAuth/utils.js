const { isEmpty } = require('lodash');

const isActingUrlOidcParams = (req, oidcClient, oidcSessionKey) => {
  const oidcParams = oidcClient.callbackParams(req);

  // если в строке запроса есть параметры, относящиеся к oidc и в хранилище сессий нет данных (каждый раз после успешного получения данных из сесси она очищается)
  // то эти параметры можно считать неактуфльными и необходимо перенаправить пользователя на повторную авторизацию
  return !isEmpty(oidcParams) && !isEmpty(req.session[oidcSessionKey]);
};

const clearQueryParams = req => {
  req.query = {};
  req.params = {};
  req.url = '/';
};

module.exports = { isActingUrlOidcParams, clearQueryParams };
