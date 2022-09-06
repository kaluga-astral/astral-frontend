import { format } from 'date-fns';
import { DEFAULT_VIEW_DATE_FORMAT } from '@astral-frontend/constants';

export const formatISOToView = ISODateString =>
  format(new Date(ISODateString), DEFAULT_VIEW_DATE_FORMAT);
