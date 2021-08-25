export type NameDecoded = { value: string; oid: string }[];

export type ToolboxCertificateInfoResult = {
  notAfter: string;
  notBefore: string;
  subjectKeyId: string;
  subjectNameDecoded: NameDecoded;
  issuerNameDecoded: NameDecoded;
  thumbprint?: string;
  algorithm?: string;
};

export type SubjectDecoderKeys =
  | 'email'
  | 'inn'
  | 'innle'
  | 'position'
  | 'department'
  | 'organization'
  | 'commonName'
  | 'namePatronymic'
  | 'surname'
  | 'street'
  | 'region'
  | 'city'
  | 'snils'
  | 'ogrn'
  | 'ogrnip';

export type IssuerDecoderKeys = 'fullName';

export type OidsList<Keys extends string> = { oid: string; name: Keys }[];

export type SubjectDecodedFields<Keys extends string> = {
  [key in Keys]?: string;
};

export type ToolboxCertificateInfo = {
  skid: string;
  endDate: string;
  startDate: string;
  isNotInstall?: boolean;
  name?: string;
  patronymic?: string;
  address?: string;
  issuer?: SubjectDecodedFields<IssuerDecoderKeys>;
} & SubjectDecodedFields<SubjectDecoderKeys>;
