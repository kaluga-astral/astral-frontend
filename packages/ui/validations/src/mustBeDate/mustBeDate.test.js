import mustBeDate, { ERROR_MESSAGE } from './mustBeDate';

describe('mustBeDate', () => {
  it.each(['2011-11-12', '1991.01.22', '01.12.2022'])(
    'Строка: %s является валидной датой',
    value => {
      expect(mustBeDate(value)).toBe(null);
    },
  );

  it.each(['2011-22-12', '1991.22.22', 'Invalid Date'])(
    'Строка: %s является не валидной датой',
    value => {
      expect(mustBeDate(value)).toBe(ERROR_MESSAGE);
    },
  );

  it('Не выдает ошибку на валидный объект даты', () => {
    expect(mustBeDate(new Date())).toBe(null);
  });

  it('Выдает ошибку на невалидный объект даты Invalid Date', () => {
    expect(mustBeDate(new Date('invalid'))).toBe(ERROR_MESSAGE);
  });
});
