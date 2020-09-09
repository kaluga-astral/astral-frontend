const { stringifyCookie, setReqCookies } = require('./cookie');

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

describe('setReqCookies', () => {
  it('устанавливает новое значение как в cookies, так и в headers.cookie', () => {
    const newCookies = { test: 'test' };
    const req = {
      headers: {},
    };

    const expectedReq = {
      cookies: newCookies,
      headers: {
        cookie: stringifyCookie(newCookies),
      },
    };

    setReqCookies(req, newCookies);

    expect(req).toEqual(expectedReq);
  });
});
