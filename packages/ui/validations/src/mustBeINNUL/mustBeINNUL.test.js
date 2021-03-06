import { ERROR_MESSAGE } from '../mustBeINN';
import { ORGANIZATION_VALIDATIONS_PARAMS } from '../constants';

import mustBeINNULValidation from './mustBeINNUL';

describe('mustBeULINN', () => {
  let mustBeINNUL;
  beforeEach(() => {
    mustBeINNUL = mustBeINNULValidation.bind(
      ORGANIZATION_VALIDATIONS_PARAMS.ul,
    );
  });
  it('должна возвращать сообщение об ошибке если value < 10 символов', () => {
    const value = new Array(9).fill('1').join('');

    expect(mustBeINNUL(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value > 10', () => {
    const value = new Array(11).fill('1').join('');

    expect(mustBeINNUL(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value === 10 символов (контрольная сумма верна)', () => {
    expect(mustBeINNUL('3703020990')).toEqual(null);
  });
  it('должна возвращать null если value === 10 символов (контрольная сумма неверна)', () => {
    expect(mustBeINNUL('3703020000')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным ИНН ЮЛ', () => {
    expect(mustBeINNUL('7728168971')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ИНН ЮЛ', () => {
    expect(mustBeINNUL('3703700000')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value является валидным ИНН ИП', () => {
    expect(mustBeINNUL('226401013493')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ИНН ИП', () => {
    expect(mustBeINNUL('212301000093')).toEqual(ERROR_MESSAGE);
  });
});
