const { fromPairs } = require('lodash');

const { secondsToMilliseconds } = require('../../utils/dateTime');

const { REFRESH_TOKEN_MAX_AGE } = require('../../config/oidc');

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

const deleteReqHeadersCookie = (req, deleteFields) => {
  // cookies появляется благодаря cookie-parser
  const { cookies } = req;

  req.headers.cookie = stringifyCookie(
    fromPairs(getFilteredCookieEntries(cookies, deleteFields)),
  );
};

module.exports = {
  stringifyCookie,
  updateSessionExpires,
  deleteReqHeadersCookie,
};
