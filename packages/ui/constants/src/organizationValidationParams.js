import {
  mustBeINNIP, mustBeINNUL, mustBeOGRNUL, mustBeOGRNIP,
} from '@astral-frontend/validations';

const ORGANIZATION_VALIDATION_PARAMS = {
  individualEntrepreneur: {
    validateINN: mustBeINNIP,
    validateOGRN: mustBeOGRNIP,
  },
  legalPerson: {
    validateINN: mustBeINNUL,
    validateOGRN: mustBeOGRNUL,
  },
};

export default ORGANIZATION_VALIDATION_PARAMS;
