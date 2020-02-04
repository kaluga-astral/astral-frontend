const httpMock = require('node-mocks-http');

const {
  stringifyCookie,
  updateSessionExpires,
  deleteReqHeadersCookie,
} = require('./cookie');

const { secondsToMilliseconds } = require('../dateTime');

const { REFRESH_TOKEN_MAX_AGE } = require('../../config/oidc');

describe('stringifyCookie', () => {
  it('преобразует объект в валидную строку cookie', () => {
    const cookieValues = {
      a: 'a',
      b: 'b',
    };
    const expectString = 'a=a; b=b';

    expect(stringifyCookie(cookieValues)).toBe(expectString);
  });

  it('обрабатывает случай, если параметр один', () => {
    const cookieValues = {
      a: 'a',
    };
    const expectString = 'a=a';

    expect(stringifyCookie(cookieValues)).toBe(expectString);
  });

  it('обрабатывает случай, если параметры отсутствуют', () => {
    const cookieValues = {};
    const expectString = '';

    expect(stringifyCookie(cookieValues)).toBe(expectString);
  });
});

describe('updateSessionExpires', () => {
  it('устанавливает для сессии время жизни на основе resresh_token maxAge', () => {
    const request = {
      session: {
        cookie: {
          maxAge: null,
        },
      },
    };

    updateSessionExpires(request);

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
