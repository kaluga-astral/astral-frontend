export type NameDecoded = { value: string; oid: string }[];

export type ToolboxCertificateInfoDTO = {
  notAfter: string;
  notBefore: string;
  subjectKeyId: string;
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
  containerName: string;
  requestName: string;
  exportableKey: boolean; // экспорт ключа
};

export type CreateTokenCertificateRequestInputDTO = {
  Pin: string;
  TokenType: string;
  computeSKID: boolean; // в доке toolbox его нет, но в ЭТ он отправляется 🤷‍
  RequestData: string; // Все данные для сертификата приведенные в json
};

export type CreateCertificateRequestDTO = {
  subjectKeyID: string; // skid сгенерированного контейнера
  value: string; // строка запроса на получения сертификата для сформированного контейнера в base64
};
