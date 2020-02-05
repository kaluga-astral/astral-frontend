const logoutMiddleware = oidcClient => async (req, res) => {
  const idToken = req.user.tokenSet.id_token;

  req.logout();

  // id_type_hint помогает серверу быстрее найти токен
  // ошибка запроса обработается error middleware
  res.status(200).send({
    redirectUrl: oidcClient.endSessionUrl({
      id_token_hint: idToken,
    }),
  });
};

module.exports = logoutMiddleware;
