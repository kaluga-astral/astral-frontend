import mustBeOKPO from './mustBeOKPO';

describe('`mustBeOKPO ` validation rule', () => {
  test('should return an error object if value is invalid', () => {
    expect(mustBeOKPO(1515151515151515)).toEqual('Введите корректный ОКПО.');
    expect(mustBeOKPO(999999999)).toEqual('Введите корректный ОКПО.');
  });

  test('should return empty object if data is valid', () => {
    expect(mustBeOKPO(60419202)).toEqual(null);
    expect(mustBeOKPO('47296611')).toEqual(null);
    // expect(mustBeOKPO("03146721980003")).toEqual(null);
  });
});
