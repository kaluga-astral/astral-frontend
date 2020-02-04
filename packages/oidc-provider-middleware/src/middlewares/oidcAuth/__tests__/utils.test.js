const httpMock = require('node-mocks-http');

const { createMockOidcClient } = require('../../../__mocks__/oidc');

const { isActingUrlOidcParams, clearQueryParams } = require('../utils');

const { OIDC_SESSION_KEY } = require('../../../config/oidc');

describe('isActingUrlOidcParams', () => {
  const oidcClient = createMockOidcClient();

  it('проверяет oidc параметры в строке запроса на актуальность', () => {
    const request = httpMock.createRequest({
      method: 'GET',
      url: '/?code=code',
      query: { code: 'code' },
      session: {
        [OIDC_SESSION_KEY]: { data: 'data' },
      },
    });

    expect(isActingUrlOidcParams(request, oidcClient)).toBe(true);
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

    expect(isActingUrlOidcParams(request, oidcClient)).toBe(false);
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

    expect(isActingUrlOidcParams(request, oidcClient)).toBe(false);
  });
});

describe('clearQueryParams', () => {
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
