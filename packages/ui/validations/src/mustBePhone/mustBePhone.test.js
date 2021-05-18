import mustBePhone from './mustBePhone';

describe('`mustBePhone` validation rule', () => {
  describe('invalid phone', () => {
    test.each`
      phone
      ${'+791'}
      ${'+791111'}
      ${'+7910593417'}
      ${'+791059341791'}
      ${'+7910593417912'}
    `('Phone length $phone no equal 9 symbols without (+79)', ({ phone }) => {
      expect(mustBePhone(phone)).not.toBeNull();
    });
  });

  describe('valid phone', () => {
    test.each`
      phone
      ${'+79105934179'}
      ${'79105934179'}
      ${'+78105934179'}
      ${'+73105934179'}
    `(
      'Phone length $phone equal 9 symbols and start from +79 | 79',
      ({ phone }) => {
        expect(mustBePhone(phone)).toBeNull();
      },
    );

    test.each`
      phone
      ${null}
      ${undefined}
      ${''}
    `('Phone is empty $phone', ({ phone }) => {
      expect(mustBePhone(phone)).toBeNull();
    });
  });
});
