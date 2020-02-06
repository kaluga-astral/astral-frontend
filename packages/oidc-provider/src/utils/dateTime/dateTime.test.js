const { secondsToMilliseconds, millisecondsToSeconds } = require('./dateTime');

describe('secondsToMilliseconds', () => {
  it('переводит секунды в милисекунды', () => {
    const seconds = 3;
    const expectMilliseconds = 3000;

    expect(secondsToMilliseconds(seconds)).toBe(expectMilliseconds);
  });
});

describe('millisecondsToSeconds', () => {
  it('переводит милисекунды в секунды', () => {
    const milliseconds = 3000;
    const expectSeconds = 3;

    expect(millisecondsToSeconds(milliseconds)).toBe(expectSeconds);
  });
});
