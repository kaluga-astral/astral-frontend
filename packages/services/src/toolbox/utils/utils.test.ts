import { TOOLBOX_CERTIFICATE_RESULTS } from '../__stubs__/certificates';

import {
  filterServiceCertificate,
  formatCertificateListToClient,
} from './utils';

describe('formatCertificateListToClient', () => {
  const FORMED_CERTIFICATE = {
    address:
      '27 Хабаровский край г. Комсомольск-на-Амуре ул. Лесозаводская, д. 6',
    city: 'г. Комсомольск-на-Амуре',
    commonName: '_тест_09.04',
    department: 'наименование ОП',
    email: 'test@mail.ty',
    endDate: '10.09.2021',
    inn: '9604183233',
    issuer: {
      fullName: 'Тестовый УЦ АО "КАЛУГА АСТРАЛ"',
    },
    name: 'Ульяна',
    namePatronymic: 'Ульяна Владимировна',
    ogrn: '1708665496550',
    organization: '_тест_09.04',
    patronymic: 'Владимировна',
    position: 'ГЕНЕРАЛЬНЫЙ ДИРЕКТОР',
    region: '27 Хабаровский край',
    skid: 'CAAE96EEBA273F188D4A72DCADC2B2701E3A1A74',
    snils: '11463322623',
    startDate: '10.09.2020',
    street: 'ул. Лесозаводская, д. 6',
    surname: 'Радина',
  };

  it('Проверка правильности формирование модели с inn', () => {
    expect(
      formatCertificateListToClient([TOOLBOX_CERTIFICATE_RESULTS]),
    ).toStrictEqual([FORMED_CERTIFICATE]);
  });

  it('Проверка правильности формирование модели c innle', () => {
    const innle = '12456789';
    expect(
      formatCertificateListToClient([
        {
          ...TOOLBOX_CERTIFICATE_RESULTS,
          subjectNameDecoded: [
            ...TOOLBOX_CERTIFICATE_RESULTS.subjectNameDecoded.filter(
              ({ oid }) => oid !== '1.2.643.3.131.1.1',
            ),
            { oid: '1.2.643.100.4', value: innle },
          ],
        },
      ]),
    ).toStrictEqual([{ ...FORMED_CERTIFICATE, inn: innle, innle }]);
  });

  it('Проверка правильности формирование модели c наличием 2 полей innle и inn', () => {
    const innle = '12456789';
    expect(
      formatCertificateListToClient([
        {
          ...TOOLBOX_CERTIFICATE_RESULTS,
          subjectNameDecoded: [
            ...TOOLBOX_CERTIFICATE_RESULTS.subjectNameDecoded,
            { oid: '1.2.643.100.4', value: innle },
          ],
        },
      ]),
    ).toStrictEqual([{ ...FORMED_CERTIFICATE, inn: innle, innle }]);
  });
});

describe('filterServiceCertificate', () => {
  it.each<string>([
    'notAfter',
    'notBefore',
    'subjectKeyId',
    'issuerNameDecoded',
    'subjectNameDecoded',
  ])('Проверка фильтрации сертификатов с отсутствующим полем %s', key => {
    expect(
      filterServiceCertificate([{ ...TOOLBOX_CERTIFICATE_RESULTS, [key]: '' }]),
    ).toStrictEqual([]);
  });

  it('Проверка отсутствия фильтрации при полной модели', () => {
    expect(
      filterServiceCertificate([TOOLBOX_CERTIFICATE_RESULTS]),
    ).toStrictEqual([TOOLBOX_CERTIFICATE_RESULTS]);
  });
});
