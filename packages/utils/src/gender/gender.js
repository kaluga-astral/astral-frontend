import { FEMALE_GENDER, MALE_GENDER } from '@astral-frontend/constants';

export const getGenderByValue = value =>
  [FEMALE_GENDER, MALE_GENDER].find(gender => gender.value === value);

export const getGenderLabelByValue = value => getGenderByValue(value)?.label;
