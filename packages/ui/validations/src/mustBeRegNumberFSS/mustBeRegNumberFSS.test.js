import mustBeRegNumberFSS from './mustBeRegNumberFSS';

describe('`mustBeRegNumberFSS` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeRegNumberFSS(11111111111)).toEqual('Неверный рег. номер ФСС. Введите корректный номер.');
    expect(mustBeRegNumberFSS(123465)).toEqual('Неверный рег. номер ФСС. Введите корректный номер.');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeRegNumberFSS(1234567890)).toEqual(null);
    expect(mustBeRegNumberFSS(151515151515151)).toEqual(null);
  });
});
