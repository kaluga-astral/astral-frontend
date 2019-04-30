import mustBeOGRN from './mustBeOGRN';

describe('`mustBeOGRN` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeOGRN(2222222222)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
    expect(mustBeOGRN(222222222222222)).toEqual('Неверный ОГРН. Введите корректный ОГРН.');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeOGRN(5024282499324)).toEqual(null);
    expect(mustBeOGRN(1118453466680)).toEqual(null);
  });
});
