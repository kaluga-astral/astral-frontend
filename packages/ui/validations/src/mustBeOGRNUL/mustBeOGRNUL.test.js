import { ERROR_MESSAGE } from '../mustBeOGRN';
import { ORGANIZATION_VALIDATIONS_PARAMS } from '../constants';

import mustBeOGRNULValidation from './mustBeOGRNUL';

describe('mustBeOGRNUL', () => {
  let mustBeOGRNUL;
  beforeEach(() => {
    mustBeOGRNUL = mustBeOGRNULValidation.bind(
      ORGANIZATION_VALIDATIONS_PARAMS.ul,
    );
  });
  it('должна возвращать сообщение об ошибке если value < 13 символов', () => {
    const value = new Array(12).fill('1').join('');

    expect(mustBeOGRNUL(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value > 13 символов', () => {
    const value = new Array(14).fill('1').join('');

    expect(mustBeOGRNUL(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value == 13 символов (контрольная сумма верна)', () => {
    expect(mustBeOGRNUL('1175958036814')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value === 13 символов (контрольная сумма неверна).', () => {
    expect(mustBeOGRNUL('1175958000004')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным ОГРН ЮЛ', () => {
    expect(mustBeOGRNUL('1175958036814')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ОГРН ЮЛ', () => {
    expect(mustBeOGRNUL('1175958000004')).toEqual(ERROR_MESSAGE);
  });
});
