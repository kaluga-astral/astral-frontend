const { generateOidcScope, getOidcClientConfig } = require('./oidc');

describe('generateOidcScope', () => {
  it('генерирует oidc scope', () => {
    expect(generateOidcScope('email')).toBe('openid offline_access email');
  });
});

describe('getOidcClientConfig', () => {
  it('приводит входные параметры для oidc-provider-middleware к спецификации для настройки oidc client', () => {
    const entryOidcParams = {
      identityUrl: 'http://url.com',
      clientId: 'client_id',
      clientSecret: 'client_id',
      redirectUri: 'http://url.com',
      postLogoutRedirectUri: 'http://url.com',
      scope: 'email',
      refreshTokenMax_age: 20,
    };
    const expectedOidcClientConfig = {
      client_id: 'client_id',
      client_secret: 'client_id',
      redirect_uri: 'http://url.com',
      post_logout_redirect_uris: 'http://url.com',
      scope: 'openid offline_access email',
      response_type: 'code',
    };

    expect(getOidcClientConfig(entryOidcParams)).toEqual(
      expectedOidcClientConfig,
    );
  });
});
