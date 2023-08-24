export type NameDecoded = { value: string; oid: string }[];

export type ToolboxCertificateInfoDTO = {
  notAfter: string;
  notBefore: string;
  notBeforeTime?: string;
  notAfterTime?: string;
  subjectKeyId: string;
  serialNumber: string;
  subjectNameDecoded: NameDecoded;
  issuerNameDecoded: NameDecoded;
  thumbprint?: string;
  algorithm?: string;
};

export type ToolboxCryptoProvidersDTO = {
  providerCode: number;
  providerName: string;
  versionMajor: number;
  versionMinor: number;
};

export type GetDataSignatureInputDTO = {
  Base64Data: string; // Данный для подписи
  SubjectKeyId: string; // Идентификатор сертификата для подписи
  Detached?: boolean; // Параметр открепленной подписи (по умолчанию true)
};

export type InstallCertInputDTO = {
  providerCode: number;
  providerName: string;
  containerName: string;
  CertData: string;
};

export type InstallTokenCertInputDTO = {
  TokenType: string;
  Pin: string;
  ContainerName: string;
  CertData: string;
};

export type CreateCertificateRequestInputDTO = {
  providerCode: number;
  providerName: string;
  signTool: string;
  certAttributes: NameDecoded;
  enhKeyUsage: string[];
  certPolicies: NameDecoded;
  certAltarnativeNames: [] | null; // В ЭТ мы не используем его, хз что в нем должно быть
  keyUsage: string;
  notBefore: string;
  notAfter: string;
  notBeforeTime?: string;
  notAfterTime?: string;
  containerName: string;
  requestName?: string; //  не знаю что это, на ЭТ не используется
  exportableKey: boolean; // экспорт ключа
  computeSKID: boolean; // без данного флага в response не будет subjectKeyID
};

export type CreateTokenCertificateRequestInputDTO = {
  pin: string;
  tokenType: number;
  computeSKID: boolean; // без данного флага в response не будет subjectKeyID
  requestData: {
    AbonentType: number; // хз что это, пример "1"
    CN: string; // commonName
    ContainerName: string;
    IdentKind: 0 | 1; // идентификатор подтверждения личности 0 - личное; 1 - удаленное по сертификату
    NotAfter: '';
    NotBefore: '';
    notBeforeTime?: '';
    notAfterTime?: '';

    INN: string; // для юр. лиц здесь может быть или inn организации, тогда отсутствует INNLE или инн физ. лица при наличии INNLE
    INNLE: string | null; // для юр. лиц здесь может быть или inn организации
    KPP: string | null; // пример "KPP=999901001"
    OGRN: string | null;
    OGRNIP: string | null;
    O: string; // название организации, обычно короткое
    OU: string | null; // название подразделения организации

    E: string; // email
    G: string; // имя и отчество в одной строке
    SN: string; // фамилия
    SNILS: string;
    T: string | null; // должность

    S: string; // регион, пример "22 Алтайский край"
    C: string; // гражданство, пример "RU"
    L: string; // город, пример "г. Барнаул"
    Street: string; // улица, пример "ул 280-летия Барнаула"
  };
};

export type CreateCertificateRequestDTO = {
  subjectKeyID: string; // skid сгенерированного контейнера
  value: string; // строка запроса на получения сертификата для сформированного контейнера в base64
};
