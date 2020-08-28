const OIDC_CLIENT_CONFIG = {
  client_id: 'local_code_flow',
  client_secret: 'secret',
  redirect_uris: ['http://localhost:3000'],
  post_logout_redirect_uris: ['http://localhost:3000'],
  response_type: 'code',
  scope: 'openid offline_access email',
};

module.exports = { OIDC_CLIENT_CONFIG };
