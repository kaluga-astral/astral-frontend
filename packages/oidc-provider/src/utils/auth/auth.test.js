const { skipIfAuthorized } = require('./auth');

describe('skipIfAuthorized', () => {
  const middleware = () => 'call';
  const next = () => undefined;
  const res = {};

  it('пропускает middleware, если пользователь авторизован', () => {
    const req = {
      isAuthenticated: () => true,
    };

    expect(skipIfAuthorized(middleware)(req, res, next)).toBe(undefined);
  });

  it('вызывает middleware', () => {
    const req = { isAuthenticated: () => false };

    expect(skipIfAuthorized(middleware)(req, res, next)).toBe('call');
  });
});
