import mustBeEmail, { ERROR_MESSAGE } from './mustBeEmail';

describe('` mustBePresent` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeEmail(12312213)).toEqual(ERROR_MESSAGE);
    expect(mustBeEmail('12312213')).toEqual(ERROR_MESSAGE);
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeEmail('isaevmaxim1905@gmail.com')).toEqual(null);
    expect(mustBeEmail('isaevmaxim1905@gmail.ru')).toEqual(null);
    expect(mustBeEmail('isaevmaxim1905@mail.ru')).toEqual(null);
    expect(mustBeEmail('isaev-maxim1905@mail.ru')).toEqual(null);
    expect(mustBeEmail('isaev.maxim1905@mail.ru')).toEqual(null);
  });

  test('разрешен домен верхнего уровня до 16 символов', () => {
    expect(mustBeEmail('test@fortis.online')).toEqual(null);
    expect(mustBeEmail('test@fortis.international')).toEqual(null);
    expect(mustBeEmail('test@fortis.internationalser')).toEqual(null);
    expect(mustBeEmail('test@fortis.internationalser1')).toEqual(ERROR_MESSAGE);
  });
});
