const egripNumberRegExp = /^\d{2} \d{12}$/;

export default function mustBeEGRIPNumber(value) {
  if (egripNumberRegExp.test(value)) {
    return null;
  }

  return 'Серия и номер имеют некорректный формат';
}
