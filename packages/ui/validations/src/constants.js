/* eslint-disable import/prefer-default-export */
import mustBeINNIP from './mustBeINNIP';
import mustBeINNUL from './mustBeINNUL';
import mustBeINN from './mustBeINN';
import mustBeOGRNIP from './mustBeOGRNIP';
import mustBeOGRNUL from './mustBeOGRNUL';
import mustBeOGRN from './mustBeOGRN';

// TODO: оставить в @astral-frontend/validations только константы и их экспортировать
export const ORGANIZATION_VALIDATIONS_PARAMS = {
  ip: {
    labelINN: 'ИНН ИП',
    labelOGRN: 'ОГРН ИП',
    maxLengthINN: 12,
    maxLengthOGRN: 15,
    weightsForCheckNumINN: {
      elevenChars: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0],
      twelveChars: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
    },
    validateINN(args) {
      return mustBeINNIP.call(ORGANIZATION_VALIDATIONS_PARAMS.ip, ...args);
    },
    validateOGRN(args) {
      return mustBeOGRNIP.call(ORGANIZATION_VALIDATIONS_PARAMS.ip, ...args);
    },
  },
  ul: {
    labelINN: 'ИНН ЮЛ',
    labelOGRN: 'ОГРН ЮЛ',
    maxLengthINN: 10,
    maxLengthOGRN: 13,
    weightsForCheckNumINN: [2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
    validateINN(args) {
      return mustBeINNUL.call(ORGANIZATION_VALIDATIONS_PARAMS.ul, ...args);
    },
    validateOGRN(args) {
      return mustBeOGRNUL.call(ORGANIZATION_VALIDATIONS_PARAMS.ul, ...args);
    },
  },
  null: {
    labelINN: 'ИНН',
    labelOGRN: 'ОГРН',
    maxLengthINN: 12,
    maxLengthOGRN: 15,
    validateINN(args) {
      return mustBeINN.call(ORGANIZATION_VALIDATIONS_PARAMS, ...args);
    },
    validateOGRN(args) {
      return mustBeOGRN.call(ORGANIZATION_VALIDATIONS_PARAMS, ...args);
    },
  },
};
