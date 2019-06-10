const mustBeKPP = (value) => {
  if (/^(\d{9})$/.test(value)) {
    return null;
  }

  return 'Неверный КПП. Введите корректный КПП.';
};

export default mustBeKPP;
