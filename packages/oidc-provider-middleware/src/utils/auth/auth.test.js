const { skipIfSuccessAuth } = require('./auth');

describe('skipIfSuccessAuth', () => {
  const middleware = () => 'call';
  const next = () => undefined;
  const res = {};

  it('пропускает middleware, если пользователь авторизован', () => {
    const req = {
      isAuthenticated: () => true,
    };

    expect(skipIfSuccessAuth(middleware)(req, res, next)).toBe(undefined);
  });

  it('вызывает middleware', () => {
    const req = { isAuthenticated: () => false };

    expect(skipIfSuccessAuth(middleware)(req, res, next)).toBe('call');
  });
});
