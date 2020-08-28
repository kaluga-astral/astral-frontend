const generateCookieValue = (key, value) => `${key}=${value}`;

// TODO: эта утилка есть в @astral-frontend/oidc-provider, надо как то расшарить ее
const stringifyCookie = values => {
  const valuesEntries = Object.entries(values);

  return valuesEntries.reduce((cookieString, currentEntry, index) => {
    const [key, value] = currentEntry;

    if (index === valuesEntries.length - 1) {
      return `${cookieString}${generateCookieValue(key, value)}`;
    }

    return `${cookieString}${generateCookieValue(key, value)}; `;
  }, '');
};

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

const setReqCookies = (req, newCookies) => {
  req.cookies = newCookies;
  req.headers.cookie = stringifyCookie(newCookies);
};

module.exports = {
  stringifyCookie,
  normalizeCookies,
  setReqCookies,
};
