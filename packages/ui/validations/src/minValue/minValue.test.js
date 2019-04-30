import minValue from './minValue';

describe('`minValue` validation rule', () => {
  test('should return error object if data is valid', () => {
    expect(minValue(7736)(1000)).toEqual('Должно быть больше чем min');
    expect(minValue(9999999)(10)).toEqual('Должно быть больше чем min');
  });

  test('should return empty object if data is valid', () => {
    expect(minValue(10)(100)).toEqual(null);
  });
});
