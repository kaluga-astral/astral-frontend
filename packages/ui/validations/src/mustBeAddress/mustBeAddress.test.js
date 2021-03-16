import mustBeAddress, { EMPTY_CITY_ERROR_MESSAGE } from './mustBeAddress';

describe('mustBeAddress', () => {
  it('должна возвращать сообщение об ошибке, если в адресе отсутствует город', () => {
    const value = {
      regionName: 'Калужская обл.',
    };

    expect(mustBeAddress(value)).toEqual(EMPTY_CITY_ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным ИНН ИП', () => {
    const value = {
      regionName: 'Калужская обл.',
      city: 'г. Калуга',
    };

    expect(mustBeAddress(value)).toEqual(null);
  });
});
