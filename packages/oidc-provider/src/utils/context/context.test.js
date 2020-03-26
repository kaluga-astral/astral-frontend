const { createContext } = require('./context');

describe('createContext', () => {
  it('создает контекст и записывает initialValue в поле data', () => {
    const context = createContext({ store: null });

    expect(context.data).toEqual({ store: null });
  });

  it('созданный контекст содержит метод updateData, который изменяет поле data', () => {
    const context = createContext({ store: null });
    const store = { test: 1 };
    context.updateData({ store });

    expect(context.data).toEqual({ store });
  });
});
