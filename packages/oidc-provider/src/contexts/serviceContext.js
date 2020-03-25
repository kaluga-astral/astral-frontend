const { createContext } = require('../utils/context');

const serviceContext = createContext({
  store: null,
  oidcClient: null,
});

module.exports = serviceContext;
