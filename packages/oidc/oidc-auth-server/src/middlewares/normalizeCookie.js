const { normalizeCookies, setReqCookies } = require('../utils/cookie');

const normalizeCookieMiddleware = (req, res, next) => {
  // в cookie может находится строка неправильной кодировки, из за этого падает установка заголовков при проксировании
  // невалидные куки устнавливает битрикс, пример: bxmaker.geoip.2.4.2_s1_city=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0
  const normalizedCookies = normalizeCookies(req.cookies);

  setReqCookies(req, normalizedCookies);

  next();
};

module.exports = normalizeCookieMiddleware;
