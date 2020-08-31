const logger = require('../../services/logger');

const { serviceContext, oidcContext } = require('../../contexts');

const logoutMiddleware = async (req, res) => {
  const { oidcClient } = serviceContext.data;
  const { postLogoutRedirectUri } = oidcContext.data;

  const idToken = req.user.tokenSet.id_token;

  req.logout();

  const endSessionUrl = oidcClient.endSessionUrl({
    // id_type_hint помогает серверу быстрее найти токен
    id_token_hint: idToken,
    post_logout_redirect_uri: postLogoutRedirectUri,
  });

  logger.info(
    req,
    `В ответ на logout был отправлен redirectUrl: "${endSessionUrl}"`,
  );

  res.status(200).send({ redirectUrl: endSessionUrl });
};

module.exports = logoutMiddleware;
