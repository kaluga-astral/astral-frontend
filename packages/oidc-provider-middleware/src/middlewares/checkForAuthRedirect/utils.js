const { ALLOW_ORIGIN } = require('../../config/server');

const addCorsHeaders = (req, res) => {
  res.header('Access-Control-Allow-Origin', ALLOW_ORIGIN);
  res.header('Access-control-allow-credentials', 'true');
};

module.exports = { addCorsHeaders };
