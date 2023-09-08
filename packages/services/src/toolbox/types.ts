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
  serialNumber: string;
  hasToken: boolean;
  storeInfo: {
    storeName: string;
    serial: string | null;
  };
  endDate: string;
  startDate: string;
  isNotInstall?: boolean;
  name?: string;
  patronymic?: string;
  address?: string;
  innFl?: string; // Для сертификатов организации с 2 инн сюда будет записываться inn физ. лица хранящийся в inn
  issuer?: SubjectDecodedFields<IssuerDecoderKeys>;
} & SubjectDecodedFields<SubjectDecoderKeys>;
