import {
  DEFAULT_ERROR_MESSAGE,
  INVALID_LENGTH_ERROR_MESSAGE,
  mustBeEmail,
} from './mustBeEmail';

const createFilledString = length => ''.padStart(length, 'a');

describe('` mustBePresent` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeEmail(12312213)).toEqual(DEFAULT_ERROR_MESSAGE);
    expect(mustBeEmail('12312213')).toEqual(DEFAULT_ERROR_MESSAGE);
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeEmail('isaevmaxim1905@gmail.com')).toEqual(null);
    expect(mustBeEmail('isaevmaxim1905@gmail.ru')).toEqual(null);
    expect(mustBeEmail('isaevmaxim1905@mail.ru')).toEqual(null);
    expect(mustBeEmail('isaev-maxim1905@mail.ru')).toEqual(null);
    expect(mustBeEmail('isaev.maxim1905@mail.ru')).toEqual(null);
  });

  test('разрешен домен верхнего уровня от 2 символов до произвольной длины', () => {
    expect(mustBeEmail('test@fortis.r')).toEqual(DEFAULT_ERROR_MESSAGE);
    expect(mustBeEmail('test@fortis.ru')).toEqual(null);
    expect(mustBeEmail('test@fortis.international')).toEqual(null);
    expect(mustBeEmail(`test@fortis.${createFilledString(22)}`)).toEqual(null);
  });

  test('длина email ограничена 255 символами', () => {
    const baseString = 'test@fortis.';

    expect(mustBeEmail('test@fortis.online')).toEqual(null);
    expect(
      mustBeEmail(
        `${baseString}${createFilledString(256 - baseString.length + 1)}`,
      ),
    ).toEqual(INVALID_LENGTH_ERROR_MESSAGE);
  });
});
