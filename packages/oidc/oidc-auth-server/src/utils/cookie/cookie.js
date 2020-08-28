const {
  stringifyCookie,
  setReqCookies,
} = require('@astral-frontend/oidc-server-utils');

// в cookie может находится строка неправильной кодировки, из за этого падает установка заголовков при проксировании.
// для приведения к приемлемой кодировке используется encodeURIComponent (наверное так устанавливается правильная кодировка, но не факт)
const normalizeCookies = cookies =>
  Object.entries(cookies).reduce(
    (normalizedCookies, [key, value]) => ({
      ...normalizedCookies,
      [key]: encodeURIComponent(value),
    }),
    {},
  );

module.exports = {
  stringifyCookie,
  normalizeCookies,
  setReqCookies,
};
