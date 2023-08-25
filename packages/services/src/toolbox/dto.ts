export type NameDecoded = { value: string; oid: string }[];

/**
 * Объект сертификата от Тулбокса
 *
 * @property notBefore - дата начала сертификата
 * @property notAfter - дата окончания сертификата
 * @property [notBeforeTime] - время начала сертификата
 * @property [notAfterTime] - время окончания сертификата
 * @property serialNumber - серийный номер сертификата
 */
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

/**
 * Объект подписанного файла
 *
 * @property Base64Data - Данный для подписи
 * @property SubjectKeyId - Идентификатор сертификата для подписи
 * @property [Detached] - Параметр открепленной подписи (по умолчанию true)
 */
export type GetDataSignatureInputDTO = {
  Base64Data: string;
  SubjectKeyId: string;
  Detached?: boolean;
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

/**
 * Объект подписания сертификатом
 *
 * @property notBefore - дата начала сертификата
 * @property notAfter - дата окончания сертификата
 * @property [notBeforeTime] - время начала сертификата
 * @property [notAfterTime] - время окончания сертификата
 * @property exportableKey - является ли ключ экспортируемым
 */
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
  exportableKey: boolean;
  computeSKID: boolean; // без данного флага в response не будет subjectKeyID
};

/**
 * Объект подписания токеном
 *
 * @property requestData {
 *  @property CN - commonName
 *  @property IdentKind - идентификатор подтверждения личности 0 - личное; 1 - удаленное по сертификату
 *  @property NotBefore - дата начала сертификата
 *  @property NotAfter - дата окончания сертификата
 *  @property [NotBeforeTime] - время начала сертификата
 *  @property [NotAfterTime] - время окончания сертификата
 *
 *  @property INN - для юр. лиц здесь может быть или inn организации,
 *  тогда отсутствует INNLE или инн физ. лица при наличии INNLE
 *  @property INNLE - для юр. лиц здесь может быть или inn организации
 *  @property KPP - КПП, пример "KPP=999901001"
 *  @property OGRN - ОГРН
 *  @property OGRNIP - ОГРНИП
 *  @property O - название организации, обычно короткое
 *  @property OU - название подразделения организации
 *
 *  @property E - email
 *  @property G - имя и отчество в одной строке
 *  @property SN - фамилия
 *  @property T - должность
 *
 *  @property S - регион, пример "22 Алтайский край"
 *  @property C - гражданство, пример "RU"
 *  @property L - город, пример "г. Барнаул"
 *  @property Street - улица, пример "ул 280-летия Барнаула"
 * } - объект передаваемых данных
 */
export type CreateTokenCertificateRequestInputDTO = {
  pin: string;
  tokenType: number;
  computeSKID: boolean; // без данного флага в response не будет subjectKeyID
  requestData: {
    AbonentType: number; // хз что это, пример "1"
    CN: string;
    ContainerName: string;
    IdentKind: 0 | 1;
    NotAfter: '';
    NotBefore: '';
    NotBeforeTime?: '';
    NotAfterTime?: '';

    INN: string;
    INNLE: string | null;
    KPP: string | null;
    OGRN: string | null;
    OGRNIP: string | null;
    O: string;
    OU: string | null;

    E: string;
    G: string;
    SN: string;
    SNILS: string;
    T: string | null;

    S: string;
    C: string;
    L: string;
    Street: string;
  };
};

/**
 * Объект созданного сертификата
 *
 * @property subjectKeyID - skid сгенерированного контейнера
 * @property value - строка запроса на получения сертификата для сформированного контейнера в base64
 */
export type CreateCertificateRequestDTO = {
  subjectKeyID: string;
  value: string;
};
