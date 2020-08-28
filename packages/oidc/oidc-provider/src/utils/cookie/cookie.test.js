const httpMock = require('node-mocks-http');

const { updateSessionExpires, deleteReqHeadersCookie } = require('./cookie');

const { secondsToMilliseconds } = require('../dateTime');

describe('updateSessionExpires', () => {
  const REFRESH_TOKEN_MAX_AGE = 600;

  it('устанавливает для сессии время жизни на основе resresh_token maxAge', () => {
    const request = {
      session: {
        cookie: {
          maxAge: null,
        },
      },
    };

    updateSessionExpires(request, REFRESH_TOKEN_MAX_AGE);

    expect(request.session.cookie.maxAge).toBe(
      secondsToMilliseconds(REFRESH_TOKEN_MAX_AGE),
    );
  });
});

describe('deleteReqHeadersCookie', () => {
  it('удаляет из заголовкоа запроса cookie переданные поля', () => {
    const request = httpMock.createRequest({
      cookies: {
        data: 'data',
        test: 'test',
      },
    });

    deleteReqHeadersCookie(request, ['test']);

    expect(request.headers.cookie).toBe('data=data');
  });
});
