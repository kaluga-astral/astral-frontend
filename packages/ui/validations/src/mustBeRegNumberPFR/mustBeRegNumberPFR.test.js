import mustBeRegNumberPFR from './mustBeRegNumberPFR';

describe('`mustBeRegNumberPFR` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeRegNumberPFR(1313131313131)).toEqual('Неверный рег. номер ПФР. Введите корректный номер.');
    expect(mustBeRegNumberPFR(123456)).toEqual('Неверный рег. номер ПФР. Введите корректный номер.');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeRegNumberPFR(121212121212)).toEqual(null);
  });
});
