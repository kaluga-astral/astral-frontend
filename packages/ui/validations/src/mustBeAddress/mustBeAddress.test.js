import mustBeAddress, {
  EMPTY_CITY_OR_SETTLEMENT_ERROR_MESSAGE,
} from './mustBeAddress';

describe('mustBeAddress', () => {
  it('должна возвращать сообщение об ошибке, если в адресе отсутствует город', () => {
    const value = {
      regionName: 'Калужская обл.',
    };

    expect(mustBeAddress(value)).toEqual(
      EMPTY_CITY_OR_SETTLEMENT_ERROR_MESSAGE,
    );
  });
  it('должна возвращать null, если value является валидным адресом', () => {
    const value = {
      regionName: 'Калужская обл.',
      city: 'г. Калуга',
    };

    expect(mustBeAddress(value)).toEqual(null);
  });
  it('должна возвращать null, если value является валидным адресом', () => {
    const value = {
      regionName: 'Калужская обл.',
      settlement: 'д. Деревня',
    };

    expect(mustBeAddress(value)).toEqual(null);
  });
});
