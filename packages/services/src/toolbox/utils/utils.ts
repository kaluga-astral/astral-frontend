import { compact, trimStart } from 'lodash-es';

import {
  NameDecoded,
  OidsList,
  SubjectDecodedFields,
  ToolboxCertificateInfo,
  ToolboxCertificateInfoResult,
} from '../types';
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

const CERTIFICATE_REQUIRED_KEYS: (keyof ToolboxCertificateInfoResult)[] = [
  'notAfter',
  'notBefore',
  'subjectKeyId',
  'issuerNameDecoded',
  'subjectNameDecoded',
];

export const filterServiceCertificate = (
  certificates: Partial<ToolboxCertificateInfoResult>[],
): ToolboxCertificateInfoResult[] =>
  // сертификат является служебным, если в нем отсутствует одно из обязательных полей
  certificates.filter(certificate =>
    CERTIFICATE_REQUIRED_KEYS.every(key => certificate[key]),
  ) as ToolboxCertificateInfoResult[];
/*
Преобразует форму сертификата возвращаемого с Astral.Toolbox к клиентскому виду.
Так же отбрасываются сертификаты без subjectKeyId
*/
export const formatCertificateListToClient = (
  certificates: ToolboxCertificateInfoResult[],
): ToolboxCertificateInfo[] =>
  certificates.map(
    (certificate: ToolboxCertificateInfoResult): ToolboxCertificateInfo => {
      const {
        notAfter,
        notBefore,
        subjectKeyId,
        subjectNameDecoded,
        issuerNameDecoded,
      } = certificate;

      const subject = formatOidsDecoded(subjectNameDecoded, SUBJECT_OID_LIST);
      const issuer = formatOidsDecoded(issuerNameDecoded, ISSUER_OID_LIST);

      const { name, patronymic } = separateFieldNamePatronymic(
        subject.namePatronymic || '',
      );

      return {
        endDate: notAfter,
        startDate: notBefore,
        skid: subjectKeyId,
        issuer,
        ...subject,
        // с 1.09.2012 вводится новое поля для хранения inn у ЮЛ
        // в некоторых сертификатах может присутствовать 2 поля inn и innle,
        // для корректной работы существующих приложений мы замещаем inn на innle
        inn: subject.innle || trimStart(subject.inn, '00'), // обрезает стартовые 00 для юр. лиц
        address: compact([subject.region, subject.city, subject.street]).join(
          ' ',
        ),
        name,
        patronymic,
      };
    },
    [],
  );
