import mustBeOKPO from './mustBeOKPO';

describe('mustBeOKPO', () => {
  it('должна возвращать сообщение об ошибке если value < 8 символов', () => {
    const value = new Array(7).fill('1').join();

    expect(mustBeOKPO(value)).toEqual(
      'Неверный ОКПО. Введите корректный ОКПО.',
    );
  });
  it('должна возвращать сообщение об ошибке если value > 8 символов и value < 10 символов', () => {
    const value = new Array(9).fill('1').join();

    expect(mustBeOKPO(value)).toEqual(
      'Неверный ОКПО. Введите корректный ОКПО.',
    );
  });
  it('должна возвращать сообщение об ошибке если value > 10 символов', () => {
    const value = new Array(11).fill('1').join();

    expect(mustBeOKPO(value)).toEqual(
      'Неверный ОКПО. Введите корректный ОКПО.',
    );
  });
  it('должна возвращать null если value является валидным ОКПО ЮЛ', () => {
    expect(mustBeOKPO('45000121')).toEqual(null);
  });
  it('должна возвращать null если value является валидным ОКПО ИП', () => {
    expect(mustBeOKPO('0171360524')).toEqual(null);
  });
  it('должна возвращать null если value является невалидным ОКПО ЮЛ', () => {
    expect(mustBeOKPO('48997199')).toEqual(
      'Неверный ОКПО. Введите корректный ОКПО.',
    );
  });
  it('должна возвращать null если value является невалидным ОКПО ИП', () => {
    expect(mustBeOKPO('0202099888')).toEqual(
      'Неверный ОКПО. Введите корректный ОКПО.',
    );
  });
});
