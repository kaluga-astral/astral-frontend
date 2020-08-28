const generateCookieValue = (key, value) => `${key}=${value}`;

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

const setReqCookies = (req, newCookies) => {
  req.cookies = newCookies;
  req.headers.cookie = stringifyCookie(newCookies);
};

module.exports = {
  stringifyCookie,
  setReqCookies,
};
