const { createContext } = require('../utils/context');

const serviceContext = createContext({
  store: null,
  storeClient: null,
  oidcClient: null,
});

module.exports = serviceContext;
