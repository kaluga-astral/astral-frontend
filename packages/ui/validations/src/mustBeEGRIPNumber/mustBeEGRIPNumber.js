const egripNumberRegExp = /^\d{2} \d{8,12}$/;

export default function mustBeEGRIPNumber(value) {
  if (egripNumberRegExp.test(value.trim())) {
    return null;
  }

  return 'Серия и номер имеют некорректный формат';
}
