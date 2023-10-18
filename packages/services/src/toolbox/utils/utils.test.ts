import { TOOLBOX_CERTIFICATE_RESULTS } from '../__stubs__/certificates';
import { CERTIFICATE_PRIVATE_STORE } from '../constants/certificate';

import {
  filterServiceCertificate,
  filterTokenCertificate,
  formatCertificateListToClient,
  formatInn,
} from './utils';

describe('formatCertificateListToClient', () => {
  const FORMED_CERTIFICATE = {
    address:
      '27 Хабаровский край г. Комсомольск-на-Амуре ул. Лесозаводская, д. 6',
    city: 'г. Комсомольск-на-Амуре',
    commonName: '_тест_09.04',
    department: 'наименование ОП',
    email: 'test@mail.ty',
    endDate: '10.09.2021T15:10:22',
    inn: '9604183233',
    innFl: '',
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
    serialNumber: 'aa78dsdka32902lsmandg',
    hasToken: false,
    storeInfo: {
      storeName: CERTIFICATE_PRIVATE_STORE,
      serial: null,
    },
    snils: '11463322623',
    startDate: '10.09.2020T15:10:22',
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
    ).toStrictEqual([
      {
        ...FORMED_CERTIFICATE,
        inn: innle,
        innle,
      },
    ]);
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
    ).toStrictEqual([
      {
        ...FORMED_CERTIFICATE,
        innFl: '009604183233',
        inn: innle,
        innle,
      },
    ]);
  });

  it('Проверка правильности формирование модели с отсутствием времени', () => {
    expect(
      formatCertificateListToClient([
        {
          ...TOOLBOX_CERTIFICATE_RESULTS,
          notBeforeTime: undefined,
          notAfterTime: undefined,
        },
      ]),
    ).toStrictEqual([
      {
        ...FORMED_CERTIFICATE,
        startDate: '10.09.2020T00:00:00',
        endDate: '10.09.2021T00:00:00',
      },
    ]);
  });
});

describe('filterTokenCertificate', () => {
  // другой сертификат с другим subjectKeyId
  const anotherCertificate = {
    ...TOOLBOX_CERTIFICATE_RESULTS,
    subjectKeyId: 'CAAE96EEBA273F188D4A72DCADC2B2701E3A1A73',
  };

  // дублирующийся сертификат с признаками токена
  const tokenCertificate = {
    ...TOOLBOX_CERTIFICATE_RESULTS,
    storeInfo: {
      storeName: 'Token',
      serial: '12345678',
    },
  };

  it('Проверка фильтрации сертов, если в них присутствует сертификат с токеном', () => {
    expect(
      filterTokenCertificate([
        TOOLBOX_CERTIFICATE_RESULTS,
        anotherCertificate,
        tokenCertificate,
      ]),
    ).toStrictEqual([tokenCertificate, anotherCertificate]);
  });

  it('Проверка фильтрации сертов, если в них отсутствует сертификат с токеном', () => {
    expect(
      filterTokenCertificate([TOOLBOX_CERTIFICATE_RESULTS, anotherCertificate]),
    ).toStrictEqual([TOOLBOX_CERTIFICATE_RESULTS, anotherCertificate]);
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

describe('formatInn', () => {
  it.each<[string, string]>([
    ['1234567890', '1234567890'],
    ['001234567890', '1234567890'],
    ['021234567890', '021234567890'],
    ['212345678900', '212345678900'],
  ])(
    'Проверка правильность форматирование %s инн к виду %s',
    (inputInn, expectedInn) => {
      expect(formatInn(inputInn)).toStrictEqual(expectedInn);
    },
  );
});
