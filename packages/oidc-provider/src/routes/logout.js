const router = require('express').Router();

const logout = oidcClient => async (req, res) => {
  // второй параметр - token_type_hint помогает серверу быстрее найти токен
  // ошибка запроса обработается errorMiddleware

  const idToken = req.user.tokenSet.id_token;

  req.logout();

  res.status(200).send({
    redirectUrl: oidcClient.endSessionUrl({
      id_token_hint: idToken,
    }),
  });
};

const initializeLogoutRouter = oidcClient => {
  router.post('/', logout(oidcClient));

  return router;
};

module.exports = { initializeLogoutRouter };
