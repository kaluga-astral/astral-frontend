const httpMock = require('node-mocks-http');

const { setTokenHeader } = require('../utils');

describe('setTokenHeader', () => {
  it('добавляет id_token в headers', () => {
    const request = httpMock.createRequest({
      user: {
        tokenSet: {
          id_token: 'id_token',
          token_type: 'Bearer',
        },
      },
    });

    setTokenHeader(request);

    expect(request.headers.Authorization).toBe('Bearer id_token');
  });
});
