import mustBeOGRNIP from './mustBeOGRNIP';

const ERROR_MESSAGE = 'Неверный ОГРН. Введите корректный ОГРН.';

describe('mustBeOGRNIP', () => {
  it('должна возвращать сообщение об ошибке если value < 15 символов.', () => {
    const value = new Array(14).fill('1').join('');

    expect(mustBeOGRNIP(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать сообщение об ошибке если value > 15 символов', () => {
    const value = new Array(16).fill('1').join('');

    expect(mustBeOGRNIP(value)).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value === 15 символов (контрольная сумма верна).', () => {
    expect(mustBeOGRNIP('316682000089619')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value === 15 символов (контрольная сумма неверна).', () => {
    expect(mustBeOGRNIP('316682000000019')).toEqual(ERROR_MESSAGE);
  });
  it('должна возвращать null если value является валидным ОГРНИП.', () => {
    expect(mustBeOGRNIP('316682000089619')).toEqual(null);
  });
  it('должна возвращать сообщение об ошибке если value является невалидным ОГРНИП.', () => {
    expect(mustBeOGRNIP('316682000000019')).toEqual(ERROR_MESSAGE);
  });
});
