const { serviceContext } = require('../../contexts');

const getProfileMiddleware = () => async (req, res) => {
  const { oidcClient } = serviceContext.data;

  // второй параметр - token_type_hint помогает серверу быстрее найти токен
  // ошибка запроса обработается errorMiddleware
  const userInfo = await oidcClient.userinfo(req.user.tokenSet.access_token);

  res.json(userInfo);
};

module.exports = getProfileMiddleware;
