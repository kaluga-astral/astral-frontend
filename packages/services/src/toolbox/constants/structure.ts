import { IssuerDecoderKeys, OidsList, SubjectDecoderKeys } from '../types';

export const SUBJECT_OID_LIST: OidsList<SubjectDecoderKeys> = [
  { oid: '1.2.840.113549.1.9.1', name: 'email' },
  { oid: '1.2.643.3.131.1.1', name: 'inn' },
  { oid: '1.2.643.3.131.1.1', name: 'inn' },
  { oid: '2.5.4.12', name: 'position' },
  { oid: '2.5.4.11', name: 'department' },
  { oid: '2.5.4.10', name: 'organization' },
  { oid: '2.5.4.3', name: 'commonName' },
  { oid: '2.5.4.42', name: 'namePatronymic' },
  { oid: '2.5.4.4', name: 'surname' },
  { oid: '1.2.643.100.1', name: 'ogrn' },
  { oid: '1.2.643.100.3', name: 'snils' },
  { oid: '1.2.643.100.5', name: 'ogrnip' },
  { oid: '2.5.4.9', name: 'street' },
  { oid: '2.5.4.8', name: 'region' },
  { oid: '2.5.4.7', name: 'city' },
];

export const ISSUER_OID_LIST: OidsList<IssuerDecoderKeys> = [
  { oid: '2.5.4.3', name: 'fullName' },
];
