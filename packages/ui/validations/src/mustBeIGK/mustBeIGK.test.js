import mustBeIGK from './mustBeIGK';

describe('mustBeIGK', () => {
  it('должна возвращать сообщение об ошибке если value < 20 символов', () => {
    const value = new Array(19).fill('1').join('');

    expect(mustBeIGK(value)).toEqual(
      'Неверный идентификатор гос. контракта. Введите корректный ИГК.',
    );
  });

  it('должна возвращать сообщение об ошибке если value > 25 символов', () => {
    const value = new Array(26).fill('1').join('');

    expect(mustBeIGK(value)).toEqual(
      'Неверный идентификатор гос. контракта. Введите корректный ИГК.',
    );
  });
  it('должна возвращать null если value является валидным ИГК', () => {
    const value = new Array(23).fill('1').join('');

    expect(mustBeIGK(value)).toEqual(null);
  });
});
