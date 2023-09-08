import * as operations from './constants/operations';
import { Event } from './constants/events';
import ToolboxServiceManager, {
  ToolboxServiceManagerProps,
} from './ToolboxServiceManager';
import {
  CreateCertificateRequestDTO,
  CreateCertificateRequestInputDTO,
  CreateTokenCertificateRequestInputDTO,
  GetDataSignatureInputDTO,
  GetTokenDataSignatureInputDTO,
  InstallCertInputDTO,
  InstallTokenCertInputDTO,
  ToolboxCertificateInfoDTO,
  ToolboxCryptoProvidersDTO,
} from './dto';

export type ToolboxServiceError = Error;

export class ToolboxService extends ToolboxServiceManager {
  connect = () => {
    super.connect();
  };

  /**
   * Получения версии toolbox
   */
  getVersion = () =>
    super.sendMessage<void, { version: number }>(operations.GET_VERSION.id);

  /**
   * Получение пути к папке с контейнерами для ИнфоТеКС
   */
  getContainerPath = () =>
    super.sendMessage<void, string>(operations.CONTAINER_PATH.id);

  /**
   * Получение сертификатов
   */
  getCertificates = () =>
    super.sendMessage<void, ToolboxCertificateInfoDTO[]>(
      operations.GET_CERTIFICATE_LIST.id,
    );

  /**
   * Получение установленного ПО
   */
  getEnumProviders = () =>
    super.sendMessage<void, ToolboxCryptoProvidersDTO[]>(
      operations.ENUM_PROVIDERS.id,
    );

  /**
   * Подписание файлов по
   */
  getDataSignature = (data: GetDataSignatureInputDTO) =>
    super.sendMessage<GetDataSignatureInputDTO, string>(
      operations.GET_DATA_SIGNATURE.id,
      data,
    );

  /**
   * Подписание файлов по через токен
   */
  getTokenDataSignature = (data: GetTokenDataSignatureInputDTO) =>
    super.sendMessage<GetDataSignatureInputDTO, string>(
      operations.GET_TOKEN_DATA_SIGNATURE.id,
      data,
    );

  /**
   * Установка сертификата в закрытый контейнер
   */
  // для КриптоПро и ВипНет
  installCert = (data: InstallCertInputDTO) =>
    super.sendMessage<InstallCertInputDTO, void>(
      operations.INSTALL_CERT.id,
      data,
    );

  // для рутокена или джакарта
  installTokenCert = (data: InstallTokenCertInputDTO) =>
    super.sendMessage<InstallTokenCertInputDTO, void>(
      operations.INSTALL_TOKEN_CERT.id,
      data,
    );

  /**
   * Запросы на создания контейнера с закрытым ключом
   */
  // для криптоПро и ВипНет
  createCertificateRequest = (data: CreateCertificateRequestInputDTO) =>
    super.sendMessage<
      CreateCertificateRequestInputDTO,
      CreateCertificateRequestDTO
    >(operations.CREATE_CERT_REQUEST.id, data);

  // для джакарты и рутокена
  createTokenCertificateRequest = (
    data: CreateTokenCertificateRequestInputDTO,
  ) =>
    super.sendMessage<
      CreateTokenCertificateRequestInputDTO,
      CreateCertificateRequestDTO
    >(operations.CREATE_TOKEN_CERT_REQUEST.id, data);

  /**
   * Регистрирует обработчик события
   */
  addEventListener = (event: Event, listener: EventListener) => {
    super.addEventListener(event, listener);
  };
}

export const createToolboxService = (params: ToolboxServiceManagerProps) =>
  new ToolboxService(params);
