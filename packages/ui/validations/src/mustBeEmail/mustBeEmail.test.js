import mustBeEmail from './mustBeEmail';

describe('` mustBePresent` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeEmail(12312213)).toEqual('Email имеет некорректный формат');
    expect(mustBeEmail('12312213')).toEqual('Email имеет некорректный формат');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeEmail('isaevmaxim1905@gmail.com')).toEqual(null);
    expect(mustBeEmail('isaevmaxim1905@gmail.ru')).toEqual(null);
    expect(mustBeEmail('isaevmaxim1905@mail.ru')).toEqual(null);
    expect(mustBeEmail('isaev-maxim1905@mail.ru')).toEqual(null);
    expect(mustBeEmail('isaev.maxim1905@mail.ru')).toEqual(null);
  });
});
