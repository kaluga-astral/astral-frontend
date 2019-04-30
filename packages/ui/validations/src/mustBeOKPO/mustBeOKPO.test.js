import mustBeOKPO from './mustBeOKPO';

describe('mustBeOKPO', () => {
  it('должна возвращать сообщение об ошибке если value < 8 символов', () => {
    const value = new Array(7).fill('1').join();

    expect(mustBeOKPO(value)).toEqual('Неверный ОКПО. Введите корректный ОКПО.');
  });
  it('должна возвращать сообщение об ошибке если value > 8 символов и value < 10 символов', () => {
    const value = new Array(9).fill('1').join();

    expect(mustBeOKPO(value)).toEqual('Неверный ОКПО. Введите корректный ОКПО.');
  });
  it('должна возвращать сообщение об ошибке если value > 10 символов', () => {
    const value = new Array(11).fill('1').join();

    expect(mustBeOKPO(value)).toEqual('Неверный ОКПО. Введите корректный ОКПО.');
  });
  it('должна возвращать null если value является валидным ОКПО ЮЛ', () => {
    expect(mustBeOKPO('48357148')).toEqual(null);
  });
  it('должна возвращать null если value является валидным ОКПО ИП', () => {
    expect(mustBeOKPO('0191592889')).toEqual(null);
  });
});
