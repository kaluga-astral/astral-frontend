const { createContext } = require('../utils/context');

const sessionContext = createContext({
  sessionSecret: null,
  allowSubdomains: null,
  allowOrigin: null,
});

module.exports = sessionContext;
