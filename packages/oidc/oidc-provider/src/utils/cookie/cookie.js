const { fromPairs } = require('lodash');
const { setReqCookies } = require('@astral-frontend/oidc-server-utils');

const { secondsToMilliseconds } = require('../dateTime');

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
  const newCookies = fromPairs(
    getFilteredCookieEntries(req.cookies, deleteFields),
  );

  setReqCookies(req, newCookies);
};

module.exports = {
  updateSessionExpires,
  deleteReqHeadersCookie,
};
