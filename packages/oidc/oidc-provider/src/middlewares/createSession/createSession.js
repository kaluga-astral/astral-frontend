const createSession = require('express-session');

const { serviceContext, sessionContext } = require('../../contexts');

const createSessionMiddleware = () => {
  const { store } = serviceContext.data;
  const { sessionSecret, allowSubdomains } = sessionContext.data;

  return createSession({
    store,
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { domain: allowSubdomains },
  });
};

module.exports = createSessionMiddleware;
