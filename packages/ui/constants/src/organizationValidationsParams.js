import { mustBeINNIP } from '@astral-frontend/validations/src/mustBeINNIP';
import { mustBeOGRNIP } from '@astral-frontend/validations/src/mustBeOGRNIP';
import { mustBeINNUL } from '@astral-frontend/validations/src/mustBeINNUL';
import { mustBeOGRNUL } from '@astral-frontend/validations/src/mustBeOGRNUL';

const ORGANIZATION_VALIDATIONS_PARAMS = {
  individualEntrepreneur: {
    maxLengthINN: 12,
    maxLengthOGRN: 15,
    weightsForCheckNumINN: {
      elevenChars: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0],
      twelveChars: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
    },
    validateINN: mustBeINNIP,
    validateOGRN: mustBeOGRNIP,
  },
  legalPerson: {
    maxLengthINN: 10,
    maxLengthOGRN: 13,
    weightForCheckNumINN: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
    validateINN: mustBeINNUL,
    validateOGRN: mustBeOGRNUL,
  },
};

export default ORGANIZATION_VALIDATIONS_PARAMS;
