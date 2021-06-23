import { FEMALE_GENDER, MALE_GENDER } from '@astral-frontend/constants';

import { getGenderByValue, getGenderLabelByValue } from './gender';

describe('getGenderByValue', () => {
  it.each([
    [FEMALE_GENDER.value, FEMALE_GENDER],
    [MALE_GENDER.value, MALE_GENDER],
  ])('По значению: %s находит объект gender: %o', (value, result) => {
    expect(getGenderByValue(value)).toEqual(result);
  });
});

describe('getGenderLabelByValue', () => {
  it.each([
    [FEMALE_GENDER.value, FEMALE_GENDER.label],
    [MALE_GENDER.value, MALE_GENDER.label],
  ])('По значению: %s находит объект label: %o', (value, result) => {
    expect(getGenderLabelByValue(value)).toEqual(result);
  });
});
