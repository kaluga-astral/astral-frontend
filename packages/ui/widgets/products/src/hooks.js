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

  const fetchSource = async () => {
    setFetchInfo(prevInfo => ({
      ...prevInfo,
      status: {
        ...INITIAL_FETCH_STATUS_INFO,
        loading: true,
      },
    }));

    try {
      const sourceResponse = await fetch(getProductsUrl(identityApiUrl));

      if (sourceResponse.ok) {
        const jsonResponse = await sourceResponse.json();

        setFetchInfo(prevInfo => ({
          ...prevInfo,
          status: {
            ...prevInfo.status,
            loading: false,
            success: true,
          },
          products: productsToClientAdapter(jsonResponse.data),
        }));
      }

      if (!sourceResponse.ok) setError();
    } catch (error) {
      setError();
    }
  };

  return [fetchSource, fetchInfo];
};

// eslint-disable-next-line
export { useProductsFetch };
