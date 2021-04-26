export type NameDecoded = { value: string; oid: string }[];

export enum CertificateState {
  Work,
  SoonExpire,
  Expire,
}

export type ToolboxCertificateInfoResult = {
  notAfter: string;
  notBefore: string;
  subjectKeyId: string;
  subjectNameDecoded: NameDecoded;
  issuerNameDecoded: NameDecoded;
  thumbprint: string;
};

export type SubjectDecoderKeys =
  | 'email'
  | 'inn'
  | 'position'
  | 'department'
  | 'organization'
  | 'commonName'
  | 'namePatronymic'
  | 'surname';

export type IssuerDecoderKeys = 'authority';

export type OidsList<Keys extends string> = { oid: string; name: Keys }[];

export type SubjectDecodedFields<Keys extends string> = {
  [key in Keys]?: string;
};

export type ToolboxCertificateInfo = {
  skid: string;
  commonName?: string;
  name?: string;
  surname?: string;
  patronymic?: string;
  organization?: string;
  authority?: string;
  endDate: string;
  startDate: string;
  state: CertificateState;
} & Pick<SubjectDecodedFields<SubjectDecoderKeys>, 'inn'>;

export type ConnectionStatus = {
  open: boolean;
  connect: boolean;
  error: boolean;
};
