import {
  getArrayDigitsOfValue,
  removeSpecialCharacters,
  calcCheckNumForINN,
  calcCheckSumForSNILS,
  calcCheckSumForBankAccount,
} from './utils';

describe('Convert string to numbers array', () => {
  it('должна возвращать массив чисел из строки чисел', () => {
    expect(getArrayDigitsOfValue('123456')).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
describe('Convert string to string without сharacters', () => {
  it('должна возвращать строку без символов из любой строки', () => {
    expect(removeSpecialCharacters('012-345-678 99')).toEqual('01234567899');
  });
});
describe('Calculate checknum from string', () => {
  it('должна возвращать корректную контрольную цифру для ИНН (2 параметр - веса для контрольной суммы)', () => {
    expect(
      calcCheckNumForINN(getArrayDigitsOfValue('7728168971'), [
        2,
        4,
        10,
        3,
        5,
        9,
        4,
        6,
        8,
        0,
      ]),
    ).toEqual(1);
  });
});
describe('Calculate checksum from string', () => {
  it('должна возвращать корректную контрольную сумму для СНИЛС', () => {
    expect(calcCheckSumForSNILS('15657325992')).toEqual(193);
  });
});
describe('Calculate checksum from string', () => {
  it('должна возвращать true для корректного расчетного счета (строка сформирована с БИК)', () => {
    expect(calcCheckSumForBankAccount('74540702810125000001191')).toEqual(true);
  });
});
describe('Calculate checksum from string', () => {
  it('должна возвращать false для некорректного расчетного счета (строка сформирована с БИК)', () => {
    expect(calcCheckSumForBankAccount('74540702810125919101191')).toEqual(
      false,
    );
  });
});
describe('Calculate checksum from string', () => {
  it('должна возвращать true для корректного корреспондентского счета (строка сформирована с БИК)', () => {
    expect(calcCheckSumForBankAccount('00230101810600000000673')).toEqual(true);
  });
});
describe('Calculate checksum from string', () => {
  it('должна возвращать false для некорректного корреспондентского счета (строка сформирована с БИК)', () => {
    expect(calcCheckSumForBankAccount('00230101810600011000673')).toEqual(
      false,
    );
  });
});
