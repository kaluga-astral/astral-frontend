import { ERROR_MESSAGE } from '../mustBeINN';
import mustBeINNIP from './mustBeINNIP';

describe('mustBeIPINN', () => {
  it('должна возвращать сообщение об ошибке если value < 12 символов', () => {
    const value = new Array(11).fill('1').join('');

    expect(mustBeINNIP(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value > 12 ', () => {
    const value = new Array(13).fill('1').join('');

    expect(mustBeINNIP(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value === 12 символов (контрольная сумма верна)', () => {
    expect(mustBeINNIP('683000788049')).toEqual(null);
  });
  it('должна возвращать null если value === 12 символов (контрольная сумма неверна)', () => {
    expect(mustBeINNIP('683000700049')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным ИНН ИП', () => {
    expect(mustBeINNIP('683000788049')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ИНН ИП', () => {
    expect(mustBeINNIP('683000700049')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value является валидным ИНН ЮЛ', () => {
    expect(mustBeINNIP('3232005484')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ИНН ЮЛ', () => {
    expect(mustBeINNIP('3201035181')).toEqual(ERROR_MESSAGE);
  });
});
