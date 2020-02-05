const router = require('express').Router();

const getProfile = oidcClient => async (req, res) => {
  // второй параметр - token_type_hint помогает серверу быстрее найти токен
  // ошибка запроса обработается errorMiddleware
  const userInfo = await oidcClient.userinfo(req.user.tokenSet.access_token);

  res.json(userInfo);
};

const initializeProfileRouter = oidcClient => {
  router.get('/', getProfile(oidcClient));

  return router;
};

module.exports = { initializeProfileRouter };
