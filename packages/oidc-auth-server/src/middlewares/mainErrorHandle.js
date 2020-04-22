const path = require('path');

const { isFirstHtmlRequest } = require('../utils/httpMethods');

const ERROR_TEMPLATE_PATH = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'static',
  'error.html',
);

// eslint-disable-next-line no-unused-vars
const mainErrorHandleMiddleware = (err, req, res, next) => {
  if (isFirstHtmlRequest(req)) {
    res.sendFile(ERROR_TEMPLATE_PATH);

    return;
  }

  if (!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode).send(err.message);
};

module.exports = mainErrorHandleMiddleware;
