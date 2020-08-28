const { fromPairs } = require('lodash');

const { secondsToMilliseconds } = require('../dateTime');

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

const updateSessionExpires = (req, refreshTokenMaxAgeInSec) => {
  const refreshTokenMaxAge = secondsToMilliseconds(refreshTokenMaxAgeInSec);

  if (req.session.cookie.maxAge !== refreshTokenMaxAge) {
    req.session.cookie.maxAge = refreshTokenMaxAge;
  }
};

const getFilteredCookieEntries = (cookies, deleteFields) =>
  Object.entries(cookies).filter(cookieEntry => {
    const [key] = cookieEntry;

    return !deleteFields.includes(key);
  });

const setReqCookies = (req, newCookies) => {
  req.cookies = newCookies;
  req.headers.cookie = stringifyCookie(newCookies);
};

const deleteReqHeadersCookie = (req, deleteFields) => {
  // cookies появляется благодаря cookie-parser
  const newCookies = fromPairs(
    getFilteredCookieEntries(req.cookies, deleteFields),
  );

  setReqCookies(req, newCookies);
};

module.exports = {
  stringifyCookie,
  updateSessionExpires,
  deleteReqHeadersCookie,
};
