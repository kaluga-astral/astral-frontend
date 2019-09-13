import {
  getArrayDigitsOfValue,
  removeSpecialCharacters,
  calcCheckNumForINN,
  calcCheckSumForSNILS,
} from './utils';

describe('Tests for utils:', () => {
  it('должна возвращать массив чисел из строки чисел', () => {
    expect(getArrayDigitsOfValue('123456')).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('должна возвращать строку без символов из любой строки', () => {
    expect(removeSpecialCharacters('012-345-678 99')).toEqual('01234567899');
  });
  it('должна возвращать корректную контрольную цифру для ИНН (2 параметр - веса для контрольной суммы)', () => {
    expect(
      calcCheckNumForINN(getArrayDigitsOfValue('7728168971'), [2, 4, 10, 3, 5, 9, 4, 6, 8, 0]),
    ).toEqual(1);
  });
  it('должна возвращать корректную контрольную сумму для СНИЛС', () => {
    expect(calcCheckSumForSNILS('15657325992')).toEqual(193);
  });
});
