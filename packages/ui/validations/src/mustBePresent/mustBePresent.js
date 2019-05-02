function mustBePresent(value) {
  if (!value) {
    return 'Обязательно для заполнения';
  }
  return null;
}
export default mustBePresent;
