const { Issuer, custom } = require('openid-client');

const { OIDC_CLOCK_SKEW } = require('../config/oidc');

const connectIdentity = async (oidcParams, oidcClientConfig) => {
  const { identityUrl } = oidcParams;

  try {
    const issuer = await Issuer.discover(identityUrl);

    console.log('Discovered issuer', issuer);

    const client = new issuer.Client(oidcClientConfig);

    client[custom.clock_tolerance] = OIDC_CLOCK_SKEW;

    return { client };
  } catch (err) {
    console.error('Identity connect error', err);

    process.exit(1);
  }
};

module.exports = { connectIdentity };
