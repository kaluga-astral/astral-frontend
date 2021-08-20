import { ToolboxCertificateInfo, ToolboxCertificateInfoResult } from './types';
import * as operations from './constants/operations';
import { Event } from './constants/events';
import ToolboxServiceManager, {
  ToolboxServiceManagerProps,
} from './ToolboxServiceManager';
import { formatCertificateListToClient } from './utils';

export type ToolboxServiceError = Error;

export type GetDataSignatureParams = {
  Base64Data: string; // Данный для подписи
  SubjectKeyId: string; // Идентификатор сертификата для подписи
};

export class ToolboxService extends ToolboxServiceManager {
  connect = () => {
    super.connect();
  };

  /**
   * Получения версии toolbox
   */
  getVersion = () => super.sendMessage(operations.GET_VERSION.id);

  /**
   * Получение пути к папке с контейнерами для ИнфоТеКС
   */
  getContainerPath = () => super.sendMessage(operations.CONTAINER_PATH.id);

  /**
   * Получение сертификатов
   */
  getCertificates = (): Promise<ToolboxCertificateInfo[]> =>
    super
      .sendMessage<void, ToolboxCertificateInfoResult[]>(
        operations.GET_CERTIFICATE_LIST.id,
      )
      .then(formatCertificateListToClient);

  /**
   * Получение провайдеров
   */
  getCryptoProviders = () =>
    super.sendMessage(operations.GET_CRYPTO_PROVIDERS.id);

  /**
   * Получение установленного ПО
   */
  getEnumProviders = () => super.sendMessage(operations.ENUM_PROVIDERS.id);

  /**
   * Подписание файлов по
   */
  getDataSignature = (data: GetDataSignatureParams): Promise<string> =>
    super.sendMessage<GetDataSignatureParams, string>(
      operations.GET_DATA_SIGNATURE.id,
      data,
    );

  /**
   * Регистрирует обработчик события
   */
  addEventListener = (event: Event, listener: EventListener) => {
    super.addEventListener(event, listener);
  };
}

export const createToolboxService = (params: ToolboxServiceManagerProps) =>
  new ToolboxService(params);
