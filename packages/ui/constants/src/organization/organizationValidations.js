import {
  mustBeINNIP, mustBeINNUL, mustBeOGRNUL, mustBeOGRNIP,
} from '@astral-frontend/validations';

const ORGANIZATION_VALIDATIONS = {
  individualEntrepreneur: {
    validateINN: mustBeINNIP,
    validateOGRN: mustBeOGRNIP,
  },
  legalPerson: {
    validateINN: mustBeINNUL,
    validateOGRN: mustBeOGRNUL,
  },
};

export default ORGANIZATION_VALIDATIONS;
