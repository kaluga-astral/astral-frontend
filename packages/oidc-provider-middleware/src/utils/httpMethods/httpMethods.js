const isOptionsMethod = req => req.method === 'OPTIONS';
const isGetMethod = req => req.method === 'GET';
const isHtmlRequest = req => req.headers.accept.includes('text/html');
const isFirstHtmlRequest = req => isGetMethod(req) && isHtmlRequest(req);

module.exports = {
  isOptionsMethod,
  isGetMethod,
  isHtmlRequest,
  isFirstHtmlRequest,
};
