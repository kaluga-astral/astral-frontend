import mustBeMobilePhone from './mustBeMobilePhone';

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
      expect(mustBeMobilePhone(phone)).not.toBeNull();
    });

    test.each`
      phone
      ${'+78105934179'}
      ${'+73105934179'}
    `('Phone length $phone equal 9 symbols but have`not 79', ({ phone }) => {
      expect(mustBeMobilePhone(phone)).not.toBeNull();
    });
  });

  describe('valid phone', () => {
    test.each`
      phone
      ${'+79105934179'}
      ${'79105934179'}
    `(
      'Phone length $phone equal 9 symbols and start from +79 | 79',
      ({ phone }) => {
        expect(mustBeMobilePhone(phone)).toBeNull();
      },
    );

    test.each`
      phone
      ${null}
      ${undefined}
      ${''}
    `('Phone is empty $phone', ({ phone }) => {
      expect(mustBeMobilePhone(phone)).toBeNull();
    });
  });
});
