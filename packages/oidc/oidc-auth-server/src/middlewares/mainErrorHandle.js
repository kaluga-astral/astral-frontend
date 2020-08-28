const { isFirstHtmlRequest } = require('../utils/httpMethods');

const createMainErrorHandleMiddleware = ({ internalErrorTemplatePath }) => (
  err,
  req,
  res,
  // eslint-disable-next-line no-unused-vars
  next,
) => {
  if (isFirstHtmlRequest(req)) {
    res.sendFile(internalErrorTemplatePath);

    return;
  }

  if (!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode).send(err.message);
};

module.exports = createMainErrorHandleMiddleware;
