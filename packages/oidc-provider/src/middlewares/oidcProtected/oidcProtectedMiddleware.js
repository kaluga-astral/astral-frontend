const { compose } = require('compose-middleware');

const skipAuth = require('../skipAuth');
const checkForAuthRedirect = require('../checkForAuthRedirect');
const saveDesiredReference = require('../saveDesiredReference');
const refreshToken = require('../refreshToken');
const oidcAuth = require('../oidcAuth');
const customizationRequest = require('../customizationRequest');
const redirectToDesiredReference = require('../redirectToDesiredReference');

const { skipIfAuthorized } = require('../../utils/auth');

const createOidcProtectedMiddleware = ({
  oidcClient,
  oidcParams,
  oidcSessionKey,
  sessionParams,
}) => (req, res, next) =>
  compose([
    // сразу пропускает OPTIONS запросы
    skipAuth(next),

    // если пришел GET запрос на получение html, то выполняется все, что ниже, в противном случае в ответ возвращается 401
    skipIfAuthorized(checkForAuthRedirect({ oidcClient, sessionParams })),

    // сохраняем в cookie desiredReference для того, чтобы после авторизации редиректнуть пользователя на тот route, на который он хотел попасть
    // без этого пользователь после авторизации будет всегда попадать на redirect_uri
    skipIfAuthorized(saveDesiredReference(oidcClient)),

    refreshToken(),

    // если пользователь не авторизован, то происходит oidc аутентификация с редиректами
    skipIfAuthorized(oidcAuth(oidcClient, oidcSessionKey)),
    // все, что ниже будет выполняться, если пользователь авторизован

    // устанавливает expires для cookie и добавляет токен в заголовок
    customizationRequest(oidcParams),

    redirectToDesiredReference(),
  ])(req, res, next);

module.exports = createOidcProtectedMiddleware;
