const mustBeCounterpartyId = value => {
  if (!value) {
    return null;
  }

  if (value.length < 4 || value.length > 46) {
    return 'ИДЭДО должен быть не меньше 4 и не больше 46 символов';
  }

  if (!/^[0-9A-Z-]*$/.test(value)) {
    return 'ИДЭДО должен содержать только буквы, цифры и знаки "-."';
  }

  const operatorPrefix = value.slice(0, 3);

  switch (operatorPrefix) {
    case '2BE': {
      if (!/^(?<prefix>2BE)(?<ID>[^\W_]{32})$/i.test(value)) {
        return 'Идентификатор некорректен';
      }

      return null;
    }
    case '2BM': {
      if (
        !/^(?<prefix>2BM)-(?<INN>(\d{10}|\d{12}))-(?<KPP>(\d{9}))?-?(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})\d+$/i.test(
          value,
        )
      ) {
        return 'Идентификатор некорректен';
      }

      return null;
    }
    case '2BK': {
      if (value.length < 17 || value.length > 30) {
        return 'Идентификатор некорректен';
      }

      if (!/^(?<prefix>2BK)-(?<id>(\d{7,}(-)?)(\d{4,13}))$/i.test(value)) {
        return 'Идентификатор некорректен';
      }

      return null;
    }
    case '2AL': {
      if (
        !/^(?<prefix>2AL)-((?<id>[^\W_]+)-([^\W_]+)-([^\W_]+)-([^\W_]+)-([^\W_]+)-([^\W_]{5}))$/i.test(
          value,
        )
      ) {
        return 'Идентификатор некорректен';
      }

      return null;
    }
    case '2AK': {
      if (value.length < 8 || value.length > 28) {
        return 'Идентификатор некорректен';
      }

      if (!/^(?<prefix>2AK)\.(?<id>(TX|TC|1C)\.(\d+)(\.)?\d?)$/i.test(value)) {
        return 'Идентификатор некорректен';
      }

      return null;
    }
    // case '2LJ': {
    //   if (!/^(!?)2LJ-([a-z0-9]{31})\S$/.test(`2LJ${value}`)) {
    //     return 'Идентификатор некорректен';
    //   }
    //   return null;
    // }
    case '2VO': {
      if (!/^(?<prefix>2VO)-\d*-\d{28,}$/i.test(value)) {
        return 'Идентификатор некорректен';
      }

      return null;
    }
    // case '2GS': {
    //   if (
    //     !/^(!?)(?<prefix>2GS)-(?<ID>([^\W_]+(?=-))-([^\W_]+(?=-))-([^\W_]+(?=-))-([^\W_]+(?=-))-([^\W_]{12}))$/.test(
    //       `2GS${value}`,
    //     )
    //   ) {
    //     return 'Идентификатор некорректен';
    //   }
    //   return null;
    // }
    case '2LT': {
      if (!/^(?<prefix>2LT)-(?<id>[^\W_]*)$/i.test(value)) {
        return 'Идентификатор некорректен';
      }

      return null;
    }
    default: {
      if (!value.match(/^[0-9a-zA-Z@.,-]{1,46}$/)) {
        return 'Идентификатор некорректен';
      }

      return null;
    }
  }
};

export default mustBeCounterpartyId;
