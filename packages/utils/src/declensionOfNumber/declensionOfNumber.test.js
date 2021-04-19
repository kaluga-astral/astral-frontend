import { declensionOfNumber } from './declensionOfNumber';

describe('Тест функции declensionOfNumber', () => {
  test('Должно возвращать `документ`', () => {
    expect(
      declensionOfNumber(1, ['документ', 'документа', 'документов']),
    ).toEqual('документ');
  });

  test('Должно возвращать `документ`', () => {
    expect(
      declensionOfNumber(21, ['документ', 'документа', 'документов']),
    ).toEqual('документ');
  });

  test('Должно возвращать `документа`', () => {
    expect(
      declensionOfNumber(2, ['документ', 'документа', 'документов']),
    ).toEqual('документа');
  });

  test('Должно возвращать `документа`', () => {
    expect(
      declensionOfNumber(22, ['документ', 'документа', 'документов']),
    ).toEqual('документа');
  });

  test('Должно возвращать `документов`', () => {
    expect(
      declensionOfNumber(5, ['документ', 'документа', 'документов']),
    ).toEqual('документов');
  });

  test('Должно возвращать `документов`', () => {
    expect(
      declensionOfNumber(25, ['документ', 'документа', 'документов']),
    ).toEqual('документов');
  });

  test('Должно возвращать `документов`', () => {
    expect(
      declensionOfNumber(11, ['документ', 'документа', 'документов']),
    ).toEqual('документов');
  });

  test('Должно возвращать `документ`', () => {
    expect(
      declensionOfNumber(101, ['документ', 'документа', 'документов']),
    ).toEqual('документ');
  });
});
