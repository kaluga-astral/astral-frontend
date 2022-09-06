import { formatISOToView } from './date';

describe('formatISOToView', () => {
  it.each([
    ['2011-11-11', '11.11.2011'],
    ['2022-01-22', '22.01.2022'],
  ])('Преобразует iso date: %s в дату для отображения: %s', (value, result) => {
    expect(formatISOToView(value)).toBe(result);
  });
});
