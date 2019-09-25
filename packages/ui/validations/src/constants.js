import mustBeINNIP from './mustBeINNIP';
import mustBeINNUL from './mustBeINNUL';
import mustBeINN from './mustBeINN';

// TODO: оставить в @astral-frontend/validations только константы и их экспортировать
// eslint-disable-next-line import/prefer-default-export
export const ORGANIZATION_VALIDATIONS_PARAMS = {
  ip: {
    maxLengthINN: 12,
    maxLengthOGRN: 15,
    weightsForCheckNumINN: {
      elevenChars: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0],
      twelveChars: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
    },
    validateInn: mustBeINNIP.bind(this),
  },
  ul: {
    maxLengthINN: 10,
    maxLengthOGRN: 13,
    weightsForCheckNumINN: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
    validateInn: mustBeINNUL.bind(this),
  },
  [null]: {
    maxLengthINN: 12,
    maxLengthOGRN: 15,
    validateInn(...args) {
      return mustBeINN.call(ORGANIZATION_VALIDATIONS_PARAMS, args);
    },
  },
};
