import React from 'react';

const DA_DATA_TOKEN = '49c05cb58824f27604bc0106e0269c91a67ed5b7';

const fetchAddressSuggestions = (query) => {
  const mapSuggestionsToResult = ({ data, ...suggestion }) => ({
    ...suggestion,
    data: {
      postIndex: data.postal_code,
      regionCode: (data.city_kladr_id || '').slice(0, 2) || null,
      regionName: data.region,
      area: data.area,
      city: data.city,
      street: data.street,
      house: data.house,
      housing: data.block,
      apartment: data.flat,
    },
  });

  return fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${DA_DATA_TOKEN}`,
    }),
    body: JSON.stringify({ query, count: 10 }),
  })
    .then(response => response.json())
    .then(data => data.suggestions.map(mapSuggestionsToResult))
    .catch(console.error);
};

const DaDataContext = React.createContext({ fetchAddressSuggestions });

export default DaDataContext;
