const setTokenHeader = req => {
  // eslint-disable-next-line camelcase
  const { id_token, token_type } = req.user.tokenSet;

  // eslint-disable-next-line camelcase
  req.headers['Authorization'] = `${token_type} ${id_token}`;
};

module.exports = {
  setTokenHeader,
};
