import { useState } from 'react';

import { getProductsUrl, productsToClientAdapter } from './utils';

const INITIAL_FETCH_STATUS_INFO = {
  loading: true,
  success: false,
  fail: false,
};

const useProductsFetch = identityApiUrl => {
  const [fetchInfo, setFetchInfo] = useState({
    status: INITIAL_FETCH_STATUS_INFO,
    products: [],
    error: null,
  });

  const setError = () => {
    setFetchInfo(prevInfo => ({
      ...prevInfo,
      status: {
        ...prevInfo.status,
        loading: false,
        fail: true,
      },
      error: new Error('Ошибка сервера'),
    }));
  };

  const fetchSource = () => {
    setFetchInfo(prevInfo => ({
      ...prevInfo,
      status: {
        ...INITIAL_FETCH_STATUS_INFO,
        loading: true,
      },
    }));

    fetch(getProductsUrl(identityApiUrl))
      .then(sourceResponse => {
        if (sourceResponse.ok) {
          sourceResponse.json().then(jsonResponse => {
            setFetchInfo(prevInfo => ({
              ...prevInfo,
              status: {
                ...prevInfo.status,
                loading: false,
                success: true,
              },
              products: productsToClientAdapter(jsonResponse.data),
            }));
          });
        }

        if (!sourceResponse.ok) setError();
      })
      .catch(() => {
        setError();
      });
  };

  return [fetchSource, fetchInfo];
};

// eslint-disable-next-line
export { useProductsFetch };
