import { ORGANIZATION_VALIDATIONS_PARAMS } from '../constants';

import mustBeOGRNValidation, { ERROR_MESSAGE } from './mustBeOGRN';

describe('mustBeOGRN', () => {
  let mustBeOGRN;
  beforeEach(() => {
    mustBeOGRN = mustBeOGRNValidation.bind(ORGANIZATION_VALIDATIONS_PARAMS);
  });
  it('должна возвращать сообщение об ошибке если value < 13 символов', () => {
    const value = new Array(12).fill('1').join('');

    expect(mustBeOGRN(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value > 13 символов и value < 15 символов', () => {
    const value = new Array(14).fill('1').join('');

    expect(mustBeOGRN(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value > 15 символов', () => {
    const value = new Array(16).fill('1').join('');

    expect(mustBeOGRN(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным ОГРНИП', () => {
    expect(mustBeOGRN('317312300039769')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ОГРНИП', () => {
    expect(mustBeOGRN('317312300030000')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным ОГРН', () => {
    expect(mustBeOGRN('1156100000231')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ОГРН', () => {
    expect(mustBeOGRN('1156000000000')).toEqual(ERROR_MESSAGE);
  });
});
