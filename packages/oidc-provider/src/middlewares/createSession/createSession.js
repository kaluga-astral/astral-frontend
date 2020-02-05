const createSession = require('express-session');

const createSessionMiddleware = ({ store, sessionSecret, allowSubdomains }) =>
  createSession({
    store,
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { domain: allowSubdomains },
  });

module.exports = createSessionMiddleware;
