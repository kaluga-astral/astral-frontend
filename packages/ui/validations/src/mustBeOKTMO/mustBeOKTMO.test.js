import mustBeOKTMO from './mustBeOKTMO';

describe('mustBeOKPO', () => {
  it('должна возвращать сообщение об ошибке если value < 8 символов', () => {
    const value = new Array(7).fill('1').join();

    expect(mustBeOKTMO(value)).toEqual(
      'Неверный ОКПО. Введите корректный ОКПО.',
    );
  });
  it('должна возвращать сообщение об ошибке если value > 8 символов и value < 11 символов', () => {
    const value = new Array(9).fill('1').join();

    expect(mustBeOKTMO(value)).toEqual(
      'Неверный ОКПО. Введите корректный ОКПО.',
    );
  });
  it('должна возвращать сообщение об ошибке если value > 11 символов', () => {
    const value = new Array(12).fill('1').join();

    expect(mustBeOKTMO(value)).toEqual(
      'Неверный ОКПО. Введите корректный ОКПО.',
    );
  });
  it('должна возвращать null если value является валидным ОКПО из 8 знаков', () => {
    expect(mustBeOKTMO('40393000')).toEqual(null);
  });
  it('должна возвращать null если value является валидным ОКПО из 11 знаков', () => {
    expect(mustBeOKTMO('40393000000')).toEqual(null);
  });
});
