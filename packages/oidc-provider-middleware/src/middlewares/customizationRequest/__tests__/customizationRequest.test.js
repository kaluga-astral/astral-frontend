const httpMock = require('node-mocks-http');

const { secondsToMilliseconds } = require('../../../utils/dateTime');

const {
  SESSION_COOKIE_KEY,
  DESIRED_REFERENCE_KEY,
} = require('../../../config/server');
const { REFRESH_TOKEN_MAX_AGE } = require('../../../config/oidc');

const customizationRequestMiddleware = require('../customizationRequest');

describe('customizationRequestMiddleware', () => {
  const request = httpMock.createRequest({
    session: {
      cookie: {
        maxAge: null,
        domain: undefined,
      },
    },
    user: {
      tokenSet: {
        expires_at: 3,
        id_token: 'id_token',
        token_type: 'Bearer',
      },
    },
    cookies: {
      [SESSION_COOKIE_KEY]: 'test',
      [DESIRED_REFERENCE_KEY]: '/test',
      data: 'data',
    },
    headers: {
      cookie: 'test',
      host: 'astral.ru',
    },
  });
  const response = {};
  const next = () => null;

  customizationRequestMiddleware()(request, response, next);

  // it('устанавливает domain для cookie', () => {
  //   expect(request.session.cookie.domain).toBe('.astral.ru');
  // });

  it('устанавливает expires для сессии', () => {
    expect(request.session.cookie.maxAge).toBe(
      secondsToMilliseconds(REFRESH_TOKEN_MAX_AGE),
    );
  });

  it('удаляет данные о сессии из cookie заголовков', () => {
    expect(request.headers.cookie).toBe('data=data');
  });

  it('добавляет id_token в headers', () => {
    expect(request.headers.Authorization).toBe('Bearer id_token');
  });
});
