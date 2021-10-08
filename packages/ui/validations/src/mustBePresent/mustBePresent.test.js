import { ERROR_MESSAGE, mustBePresent } from './mustBePresent';

describe('mustBePresent validation rule', () => {
  test.each`
    value
    ${''}
    ${'     '}
    ${false}
    ${[]}
    ${{}}
    ${null}
    ${undefined}
  `('value $value is invalid, return error message', ({ value }) => {
    expect(mustBePresent(value)).toBe(ERROR_MESSAGE);
  });

  it.each`
    value
    ${'a'}
    ${0}
    ${1}
    ${true}
    ${['v']}
    ${{ a: 1 }}
    ${[undefined]}
    ${NaN}
    ${new Date()}
  `('value $value is valid, return null', () => {
    expect(mustBePresent(1)).toBeNull();
  });
});
