import React from 'react';

const DA_DATA_TOKEN = '49c05cb58824f27604bc0106e0269c91a67ed5b7';

const getNormalizedAddress = data => {
  if (data) {
    return {
      postalIndex: data.postal_code,
      regionCode:
        (
          data.kladr_id ||
          data.region_kladr_id ||
          data.area_kladr_id ||
          data.city_kladr_id ||
          data.city_district_kladr_id ||
          data.street_kladr_id ||
          data.settlement_kladr_id ||
          data.house_kladr_id ||
          data.fias_code ||
          ''
        ).slice(0, 2) || null,
      regionName: data.region,
      area: data.area,
      city: data.city || data.settlement,
      street: data.street,
      house: data.house,
      housing: data.block,
      apartment: data.flat,
    };
  }

  return null;
};

const fetchAddressSuggestions = query => {
  // eslint-disable-next-line camelcase
  const mapSuggestionsToResult = ({ unrestricted_value, data }) => ({
    key: unrestricted_value,
    label: unrestricted_value,
    value: getNormalizedAddress(data),
  });

  return fetch(
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${DA_DATA_TOKEN}`,
      }),
      body: JSON.stringify({ query, count: 10 }),
    },
  )
    .then(response => response.json())
    .then(data => data.suggestions.map(mapSuggestionsToResult))
    .catch(console.error);
};

const fetchBankSuggestions = query => {
  // eslint-disable-next-line camelcase
  const mapSuggestionsToResult = ({ unrestricted_value, data }) => ({
    key: unrestricted_value,
    label: unrestricted_value,
    value: {
      ...data,
      address: {
        key: data.address.unrestricted_value,
        label: data.address.unrestricted_value,
        value: getNormalizedAddress(data.address.data),
      },
    },
  });

  return fetch(
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank',
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${DA_DATA_TOKEN}`,
      }),
      body: JSON.stringify({
        query,
        count: 10,
      }),
    },
  )
    .then(response => response.json())
    .then(data => data.suggestions.map(mapSuggestionsToResult))
    .catch(console.error);
};

const DaDataContext = React.createContext({
  fetchAddressSuggestions,
  fetchBankSuggestions,
});

export default DaDataContext;
