const validator = require('@hapi/joi');

const { validateObject, validateSessionEntryParams } = require('./validation');

describe('validateObject', () => {
  const validatedObject = { email: 'email', password: 3001 };
  const validationScheme = {
    email: validator.string().required(),
    password: validator.number().required(),
  };

  const baseErrorMessage = 'Ошибка oidc параметров';

  it('валидирует объект по переданной схеме', () => {
    expect(
      validateObject(validatedObject, validationScheme, baseErrorMessage),
    ).toEqual({ value: validatedObject });
  });
});
