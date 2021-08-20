import { ToolboxCertificateInfo, ToolboxCertificateInfoResult } from '../types';

export const TOOLBOX_CERTIFICATE_STUB: ToolboxCertificateInfo = {
  skid: 'string',
  commonName: 'LongstringtringLongstringtring string',
  name: 'LongstringtringLongstringtring string',
  surname: 'LongstringtringLongstringtring string',
  patronymic: 'LongstringtringLongstringtring string',
  organization: 'LongstringtringLongstringtring string',
  endDate: '11.11.2200',
  startDate: '10.10.2000',
  inn: '3224234324',
  snils: '3224234324',
  ogrn: '3224234324',
};

export const TOOLBOX_CERTIFICATES_STUB: ToolboxCertificateInfo[] = Array.from({
  length: 10,
}).map((_, index) => ({ ...TOOLBOX_CERTIFICATE_STUB, skid: String(index) }));

export const TOOLBOX_CERTIFICATE_RESULTS: ToolboxCertificateInfoResult = {
  notBefore: '10.09.2020',
  notAfter: '10.09.2021',
  thumbprint: 'EDDB3D83263879E6E54CB574651F4EA23A28BED3',
  subjectNameDecoded: [
    {
      oid: '2.5.4.3',
      value: '_тест_09.04',
    },
    {
      oid: '2.5.4.10',
      value: '_тест_09.04',
    },
    {
      oid: '2.5.4.11',
      value: 'наименование ОП',
    },
    {
      oid: '2.5.4.12',
      value: 'ГЕНЕРАЛЬНЫЙ ДИРЕКТОР',
    },
    {
      oid: '2.5.4.6',
      value: 'RU',
    },
    {
      oid: '2.5.4.8',
      value: '27 Хабаровский край',
    },
    {
      oid: '2.5.4.7',
      value: 'г. Комсомольск-на-Амуре',
    },
    {
      oid: '1.2.840.113549.1.9.1',
      value: 'test@mail.ty',
    },
    {
      oid: '2.5.4.4',
      value: 'Радина',
    },
    {
      oid: '2.5.4.42',
      value: 'Ульяна Владимировна',
    },
    {
      oid: '2.5.4.9',
      value: 'ул. Лесозаводская, д. 6',
    },
    {
      oid: '1.2.643.3.131.1.1',
      value: '009604183233',
    },
    {
      oid: '1.2.643.100.1',
      value: '1708665496550',
    },
    {
      oid: '1.2.643.100.3',
      value: '11463322623',
    },
  ],
  issuerNameDecoded: [
    {
      oid: '2.5.4.3',
      value: 'Тестовый УЦ АО "КАЛУГА АСТРАЛ"',
    },
    {
      oid: '2.5.4.10',
      value: 'АО "КАЛУГА АСТРАЛ"',
    },
    {
      oid: '2.5.4.6',
      value: 'RU',
    },
    {
      oid: '2.5.4.8',
      value: '40 Калужская область',
    },
    {
      oid: '2.5.4.7',
      value: 'Калуга',
    },
    {
      oid: '1.2.840.113549.1.9.1',
      value: 'ca@astralnalog.ru',
    },
    {
      oid: '2.5.4.9',
      value: 'пер. Березинский, д. 6',
    },
    {
      oid: '1.2.643.3.131.1.1',
      value: '004029017981',
    },
    {
      oid: '1.2.643.100.1',
      value: '1024001434049',
    },
  ],
  algorithm: '1.2.643.7.1.1.1.1',
  subjectKeyId: 'CAAE96EEBA273F188D4A72DCADC2B2701E3A1A74',
};
