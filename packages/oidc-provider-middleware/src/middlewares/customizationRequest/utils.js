const setTokenHeader = req => {
  const { id_token, token_type } = req.user.tokenSet;

  req.headers.Authorization = `${token_type} ${id_token}`;
};

module.exports = {
  setTokenHeader,
};
