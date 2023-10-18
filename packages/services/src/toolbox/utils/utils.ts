import { compact } from 'lodash-es';

import {
  OidsList,
  SubjectDecodedFields,
  ToolboxCertificateInfo,
} from '../types';
import { NameDecoded, ToolboxCertificateInfoDTO } from '../dto';
import { ISSUER_OID_LIST, SUBJECT_OID_LIST } from '../constants/structure';

export const formatOidsDecoded = <Keys extends string>(
  subjectNameDecoded: NameDecoded,
  oidsList: OidsList<Keys>,
): SubjectDecodedFields<Keys> =>
  subjectNameDecoded.reduce(
    (
      result: SubjectDecodedFields<Keys>,
      { value, oid },
    ): SubjectDecodedFields<Keys> => {
      const oidItem = oidsList.find(item => item.oid === oid);

      if (!oidItem) {
        return result;
      }

      return { ...result, [oidItem.name]: value };
    },
    {},
  );

// не обрабатывает случаи двойного имени или отчества
export const separateFieldNamePatronymic = (
  namePatronymic: string,
): { name: string; patronymic: string } => {
  const [name = '', patronymic = ''] = namePatronymic.split(' ');

  return { name, patronymic };
};

// обрезает стартовые 00 для юр. лиц сделано для обратной совместимости
export const formatInn = (inn: string) => inn.replace(/^00/, '');

const CERTIFICATE_REQUIRED_KEYS: (keyof ToolboxCertificateInfoDTO)[] = [
  'notAfter',
  'notBefore',
  'subjectKeyId',
  'issuerNameDecoded',
  'subjectNameDecoded',
];

export const filterServiceCertificate = (
  certificates: Partial<ToolboxCertificateInfoDTO>[],
): ToolboxCertificateInfoDTO[] => {
  // сертификат является служебным, если в нем отсутствует одно из обязательных полей
  return certificates.filter(certificate =>
    CERTIFICATE_REQUIRED_KEYS.every(key => certificate[key]),
  ) as ToolboxCertificateInfoDTO[];
};

/*
Фильтрует сертификаты с токеном, т.к. Тулбокс поставляет их в дублирующемся формате:
один с токеном и один обычный и оба с одинаковым subjectKeyId. Обычный сертификат лишний
*/
export const filterTokenCertificate = (
  certificates: ToolboxCertificateInfoDTO[],
): ToolboxCertificateInfoDTO[] => {
  return certificates.reduce(
    (
      acc: ToolboxCertificateInfoDTO[],
      currentElem: ToolboxCertificateInfoDTO,
    ) => {
      const isAccCertificateContains = acc.some(
        certificate => certificate.subjectKeyId === currentElem.subjectKeyId,
      );

      if (isAccCertificateContains) {
        return acc;
      }

      const certificatesWithSameSkid = certificates.filter(
        certificate => certificate.subjectKeyId === currentElem.subjectKeyId,
      );

      // если сертификатов больше 1, то среди них должен быть один с токеном
      if (certificatesWithSameSkid.length > 1) {
        const tokenCertificates = certificatesWithSameSkid.filter(certificate =>
          Boolean(certificate.storeInfo.serial),
        );
        // защита, если сертификата с токеном нет, то берется дефолтный
        const tokenCertificate =
          tokenCertificates[0] ?? certificatesWithSameSkid[0];

        return [...acc, tokenCertificate];
      }

      return [...acc, ...certificatesWithSameSkid];
    },
    [],
  );
};

/*
Преобразует форму сертификата возвращаемого с Astral.Toolbox к клиентскому виду.
Так же отбрасываются сертификаты без subjectKeyId
*/
export const formatCertificateListToClient = (
  certificates: ToolboxCertificateInfoDTO[],
): ToolboxCertificateInfo[] =>
  certificates.map(
    (certificate: ToolboxCertificateInfoDTO): ToolboxCertificateInfo => {
      const {
        notAfter,
        notBefore,
        notBeforeTime,
        notAfterTime,
        hasPrivateKey,
        storeInfo,
        subjectKeyId,
        subjectNameDecoded,
        issuerNameDecoded,
        serialNumber,
      } = certificate;

      // добавление времени сертификата к дате для точного отсчета времени начала и прекращения действия
      // для старых версий Тулбокса добавляется время 00:00:00
      const startDate = notBeforeTime
        ? `${notBefore}T${notBeforeTime}`
        : `${notBefore}T00:00:00`;
      const endDate = notAfterTime
        ? `${notAfter}T${notAfterTime}`
        : `${notAfter}T00:00:00`;

      const subject = formatOidsDecoded(subjectNameDecoded, SUBJECT_OID_LIST);
      const issuer = formatOidsDecoded(issuerNameDecoded, ISSUER_OID_LIST);

      const { name, patronymic } = separateFieldNamePatronymic(
        subject.namePatronymic || '',
      );

      return {
        endDate,
        startDate,
        skid: subjectKeyId,
        serialNumber,
        hasToken: hasPrivateKey,
        storeInfo,
        issuer,
        ...subject,
        // с 1.09.2012 вводится новое поля для хранения inn у ЮЛ
        // в некоторых сертификатах может присутствовать 2 поля inn и innle,
        // для корректной работы существующих приложений мы замещаем inn на innle
        innFl: subject.innle && subject.inn ? subject.inn : '',
        inn: subject.innle || formatInn(subject.inn || ''),
        address: compact([subject.region, subject.city, subject.street]).join(
          ' ',
        ),
        name,
        patronymic,
      };
    },
    [],
  );
