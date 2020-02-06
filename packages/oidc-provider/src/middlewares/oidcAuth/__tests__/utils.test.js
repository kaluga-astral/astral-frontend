const httpMock = require('node-mocks-http');

const { createMockOidcClient } = require('../../../__mocks__/oidc');

const { isActingUrlOidcParams, clearQueryParams } = require('../utils');

describe('isActingUrlOidcParams', () => {
  const oidcClient = createMockOidcClient();
  const OIDC_SESSION_KEY = 'sessionKey';

  it('проверяет oidc параметры в строке запроса на актуальность', () => {
    const request = httpMock.createRequest({
      method: 'GET',
      url: '/?code=code',
      query: { code: 'code' },
      session: {
        [OIDC_SESSION_KEY]: { data: 'data' },
      },
    });

    expect(isActingUrlOidcParams(request, oidcClient, OIDC_SESSION_KEY)).toBe(
      true,
    );
  });

  it('проверяет oidc параметры в строке запроса на неактуальность', () => {
    const request = httpMock.createRequest({
      method: 'GET',
      url: '/?code=code',
      query: { code: 'code' },
      session: {
        [OIDC_SESSION_KEY]: {},
      },
    });

    expect(isActingUrlOidcParams(request, oidcClient, OIDC_SESSION_KEY)).toBe(
      false,
    );
  });

  it('oidc параметры неактуальны, если их нет', () => {
    const request = httpMock.createRequest({
      method: 'GET',
      url: '/',
      query: {},
      session: {
        [OIDC_SESSION_KEY]: {},
      },
    });

    expect(isActingUrlOidcParams(request, oidcClient, OIDC_SESSION_KEY)).toBe(
      false,
    );
  });
});

describe('clearQueryParams', () => {
  const OIDC_SESSION_KEY = 'sessionKey';

  it('удаляет query параметры из request', () => {
    const request = httpMock.createRequest({
      method: 'GET',
      url: '/?code=code',
      query: { code: 'code' },
      session: {
        [OIDC_SESSION_KEY]: {},
      },
    });

    clearQueryParams(request);

    expect(request.query).toEqual({});
    expect(request.params).toEqual({});
    expect(request.url).toEqual('/');
  });
});
