import React from 'react';

const DA_DATA_TOKEN = '49c05cb58824f27604bc0106e0269c91a67ed5b7';
const FEDERAL_CITIES = ['Москва', 'Санкт-Петербург', 'Севастополь'];

const getNormalizedAddress = data => {
  if (data) {
    return {
      postalIndex: data.postal_code,
      regionCode: data.region_kladr_id?.slice(0, 2) || null,
      regionName: FEDERAL_CITIES.includes(data.city)
        ? null
        : data.region_with_type,
      area: data.area_with_type,
      city: data.city_with_type || data.settlement_with_type,
      street: data.street_with_type,
      house: data.house ? `${data.house_type} ${data.house}` : null,
      housing: data.block ? `${data.block_type} ${data.block}` : null,
      apartment: data.flat ? `${data.flat_type} ${data.flat}` : null,
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
