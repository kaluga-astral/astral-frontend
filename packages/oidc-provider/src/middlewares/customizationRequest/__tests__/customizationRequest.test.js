const httpMock = require('node-mocks-http');

const { secondsToMilliseconds } = require('../../../utils/dateTime');

const { oidcContext } = require('../../../contexts');

const {
  SESSION_COOKIE_KEY,
  DESIRED_REFERENCE_KEY,
} = require('../../../config/session');

const customizationRequestMiddleware = require('../customizationRequest');

describe('customizationRequestMiddleware', () => {
  const refreshTokenMaxAge = 600;
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

  oidcContext.updateData({ refreshTokenMaxAge });

  customizationRequestMiddleware()(request, response, next);

  it('устанавливает expires для сессии', () => {
    expect(request.session.cookie.maxAge).toBe(
      secondsToMilliseconds(refreshTokenMaxAge),
    );
  });

  it('удаляет данные о сессии из cookie заголовков', () => {
    expect(request.headers.cookie).toBe('data=data');
  });

  it('добавляет id_token в headers', () => {
    expect(request.headers.Authorization).toBe('Bearer id_token');
  });
});
