const addCorsHeaders = (res, allowOrigin) => {
  res.header('Access-Control-Allow-Origin', allowOrigin);
  res.header('Access-control-allow-credentials', 'true');
};

module.exports = { addCorsHeaders };
