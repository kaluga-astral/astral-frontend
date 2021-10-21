import { format } from 'date-fns';
import { DEFAULT_DATE_INPUT_FORMAT } from '@astral-frontend/constants';

export const formatISOToView = ISODateString =>
  format(new Date(ISODateString), DEFAULT_DATE_INPUT_FORMAT);
