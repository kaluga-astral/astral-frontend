import { TOOLBOX_CERTIFICATE_RESULTS } from '../__stubs__/certificates';

import { formatCertificateListToClient } from './utils';

describe('formatCertificateListToClient', () => {
  it('Проверка правильности формирование модели', () => {
    expect(
      formatCertificateListToClient([TOOLBOX_CERTIFICATE_RESULTS]),
    ).toStrictEqual([
      {
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
      },
    ]);
  });

  it.each<string>(['subjectKeyId', 'notBefore', 'notAfter'])(
    'Проверка фильтрации сертификатов с отсутствующим полем %s',
    key => {
      expect(
        formatCertificateListToClient([
          { ...TOOLBOX_CERTIFICATE_RESULTS, [key]: '' },
        ]),
      ).toStrictEqual([]);
    },
  );
});
