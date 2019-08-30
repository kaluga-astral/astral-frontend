import {
  mustBeINNIP, mustBeINNUL, mustBeOGRNUL, mustBeOGRNIP,
} from '@astral-frontend/validations';

const ORGANIZATION_TYPES = {
  ip: {
    validateINN: mustBeINNIP,
    validateOGRN: mustBeOGRNIP,
  },
  ul: {
    validateINN: mustBeINNUL,
    validateOGRN: mustBeOGRNUL,
  },
};

export default ORGANIZATION_TYPES;
