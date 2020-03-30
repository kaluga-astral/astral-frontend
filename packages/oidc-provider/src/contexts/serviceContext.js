const { createContext } = require('../utils/context');

const serviceContext = createContext({
  store: null,
  storeClient: null,
  storeSubscriber: null,
  storePublisher: null,
  oidcClient: null,
});

module.exports = serviceContext;
