const { Issuer, custom } = require('openid-client');

const { getOidcClientConfig } = require('../utils/oidc');

const { OIDC_CLOCK_SKEW } = require('../config/oidc');

const connectIdentity = async oidcParams => {
  const { identityUrl } = oidcParams;

  try {
    const issuer = await Issuer.discover(identityUrl);

    console.log('Discovered issuer', issuer);

    const client = new issuer.Client(getOidcClientConfig(oidcParams));

    client[custom.clock_tolerance] = OIDC_CLOCK_SKEW;

    return { client };
  } catch (err) {
    console.error('Identity connect error', err);

    process.exit(1);
  }
};

module.exports = { connectIdentity };
