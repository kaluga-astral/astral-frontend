import mustBeCounterpartyId from './mustBeCounterpartyId';

describe('mustBeCounterpartyId', () => {
  it('должна возвращать сообщение об ошибке для невалидных ИДЭДО оператора Тензор (2BE)', () => {
    expect(mustBeCounterpartyId('2BE')).toEqual(
      'ID ЭДО должен быть не меньше 4 и не больше 46 символов',
    );
    expect(
      mustBeCounterpartyId('2BE99999999999999999999999999999999999999999999'),
    ).toEqual('ID ЭДО должен быть не меньше 4 и не больше 46 символов');
  });
});
