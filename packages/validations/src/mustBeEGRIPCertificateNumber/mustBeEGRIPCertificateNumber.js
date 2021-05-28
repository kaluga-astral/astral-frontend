const egripNumberRegExp = /^\d{2} \d{9}$/;

export default function mustBeEGRIPCertificateNumber(value) {
  if (egripNumberRegExp.test(value)) {
    return null;
  }

  return 'Серия и номер имеют некорректный формат';
}
