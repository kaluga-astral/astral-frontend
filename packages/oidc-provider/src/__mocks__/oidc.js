const getClientClass = require('openid-client/lib/client');

const { OIDC_CLIENT_CONFIG } = require('../__stubs__/oidc');

const createMockOidcClient = () => {
  const ClientClass = getClientClass({});

  return new ClientClass(OIDC_CLIENT_CONFIG);
};

module.exports = { createMockOidcClient };
