import mustBeDatePeriod from './mustBeDatePeriod';

describe('mustBeDatePeriod validation rule', () => {
  test.each([
    ['2019', '1000', '2017'],
    ['02.11.2011', '02.09.2011', '02.10.2011'],
    ['10.02.2011', '11.02.2011', '11.02.2011'],
  ])(
    'Для значения %s при min: %s, max: %s, возвращает сообщение об ошибке',
    (value, min, max) => {
      expect(
        mustBeDatePeriod(min, value, max).includes('Дата должна быть не'),
      ).toBeTruthy();
    },
  );

  test.each([
    ['2019', '1000', '2020'],
    ['1000', '1000', '2017'],
    ['2017', '1000', '2017'],
    ['10.02.2011', '09.02.2011', '10.02.2011'],
    ['2021-08-17T00:00:00', '2021-08-17T20:00:00', '02.22.2030'],
    [
      new Date('02.10.2011').toISOString(),
      new Date('02.10.2011').toISOString(),
      '02.22.2011',
    ],
    [
      String(new Date('02.10.2011')),
      String(new Date('02.10.2011')),
      '02.22.2011',
    ],
  ])(
    'Для значения %s при min: %s, max: %s, возвращает null',
    (value, min, max) => {
      expect(mustBeDatePeriod(min, value, max)).toBe(null);
    },
  );
});
