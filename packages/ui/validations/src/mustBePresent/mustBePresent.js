function mustBePresent(value) {
  if (!value.trim()) {
    return 'Обязательно для заполнения';
  }
  return null;
}
export default mustBePresent;
