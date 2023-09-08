export type NameDecoded = { value: string; oid: string }[];

export type ToolboxCertificateInfoDTO = {
  /**
   * @description Дата создания сертификата
   */
  notBefore: string;
  /**
   * @description Дата окончания сертификата
   */
  notAfter: string;
  /**
   * @description Время создания сертификата
   * @default '00:00:00'
   */
  notBeforeTime?: string;
  /**
   * @description Время окончания сертификата
   * @default '00:00:00'
   */
  notAfterTime?: string;
  /**
   * @description Подключен ли токен в компьютер
   */
  hasPrivateKey: boolean;
  /**
   * @description Информация о сертификате
   */
  storeInfo: {
    /**
     * @description Место хранения сертификата
     * @example 'My - на компьютере; Token - на токене'
     */
    storeName: string;
    /**
     * @description Серийный номер
     * @example 'null - отсутствует (не токен); 1080315700 - токен'
     */
    serial: string | null;
  };
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
  /**
   * @description Данные для подписи
   */
  Base64Data: string;
  /**
   * @description Идентификатор сертификата для подписи
   */
  SubjectKeyId: string;
  /**
   * @description Параметр открепленной подписи
   * @default 'true'
   */
  Detached?: boolean;
};

export type GetTokenDataSignatureInputDTO = {
  /**
   * @description Пин-код токена
   */
  Pin: string;
  /**
   * @description Данные для подписи
   */
  Base64Data: string;
  /**
   * @description Идентификатор сертификата для подписи
   */
  SubjectKeyId: string;
  /**
   * @description Имя контейнера
   */
  ContainerName?: string;
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
  /**
   * @description Дата создания сертификата
   */
  notBefore: string;
  /**
   * @description Дата окончания сертификата
   */
  notAfter: string;
  /**
   * @description Время создания сертификата
   * @default '00:00:00'
   */
  notBeforeTime?: string;
  /**
   * @description Время окончания сертификата
   * @default '00:00:00'
   */
  notAfterTime?: string;
  containerName: string;
  requestName?: string; //  не знаю что это, на ЭТ не используется
  /**
   * @description Является ли ключ экспортируемым
   * @default 'true'
   */
  exportableKey: boolean;
  computeSKID: boolean; // без данного флага в response не будет subjectKeyID
};

export type CreateTokenCertificateRequestInputDTO = {
  pin: string;
  tokenType: number;
  computeSKID: boolean; // без данного флага в response не будет subjectKeyID
  requestData: {
    AbonentType: number; // хз что это, пример "1"
    /**
     * @description commonName
     */
    CN: string;
    ContainerName: string;
    /**
     * @description Идентификатор подтверждения личности
     * @example '0 - личное; 1 - удаленное по сертификату'
     */
    IdentKind: 0 | 1;
    /**
     * @description Дата создания сертификата
     */
    NotBefore: '';
    /**
     * @description Дата окончания сертификата
     */
    NotAfter: '';
    /**
     * @description Время создания сертификата
     * @default '00:00:00'
     */
    NotBeforeTime?: '';
    /**
     * @description Время окончания сертификата
     * @default '00:00:00'
     */
    NotAfterTime?: '';

    /**
     * @description // Для юр. лиц здесь может быть или inn организации, тогда отсутствует INNLE или инн физ. лица при наличии INNLE
     */
    INN: string;
    /**
     * @description // Для юр. лиц здесь может быть или inn организации
     */
    INNLE: string | null;
    /**
     * @description // КПП
     * @example '999901001'
     */
    KPP: string | null;
    OGRN: string | null;
    OGRNIP: string | null;
    /**
     * @description Название организации, обычно короткое
     */
    O: string;
    /**
     * @description Название подразделения организации
     */
    OU: string | null;

    /**
     * @description Email
     */
    E: string;
    /**
     * @description Имя и отчество в одной строке
     */
    G: string;
    /**
     * @description Фамилия
     */
    SN: string;
    SNILS: string;
    /**
     * @description Должность
     */
    T: string | null;

    /**
     * @description Регион
     * @example '22 Алтайский край'
     */
    S: string;
    /**
     * @description Гражданство
     * @example 'RU'
     */
    C: string;
    /**
     * @description Город
     * @example 'г. Барнаул'
     */
    L: string;
    /**
     * @description Улица
     * @example 'ул 280-летия Барнаула'
     */
    Street: string;
  };
};

export type CreateCertificateRequestDTO = {
  /**
   * @description skid сгенерированного контейнера
   */
  subjectKeyID: string;
  /**
   * @description Строка запроса на получения сертификата для сформированного контейнера в base64
   */
  value: string;
};
