import mustBeINNIP from './mustBeINNIP';
import mustBeOGRNIP from './mustBeOGRNIP';
import mustBeINNUL from './mustBeINNUL';
import mustBeORGNUL from './mustBeOGRNUL';

// eslint-disable-next-line import/prefer-default-export
export const ORGANIZATION_VALIDATIONS_PARAMS = {
  individualEntrepreneur: {
    maxLengthINN: 12,
    maxLengthOGRN: 15,
    weightsForCheckNumINN: {
      elevenChars: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0],
      twelveChars: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
    },
    validateINN(...args) {
      console.log(this, 'INNIP');
      return mustBeINNIP.call(this, ...args);
    },
    validateORGN(...args) {
      console.log(this, 'OGRNIP');
      return mustBeOGRNIP.call(this, ...args);
    },
  },
  legalPerson: {
    maxLengthINN: 10,
    maxLengthOGRN: 13,
    weightForCheckNumINN: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
    validateINN(...args) {
      console.log(this, 'INNUL');
      return mustBeINNUL.call(this, ...args);
    },
    validateORGN(...args) {
      console.log(this, 'OGRNUL');
      return mustBeORGNUL.call(this, ...args);
    },
  },
};
