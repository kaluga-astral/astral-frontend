import { useState } from 'react';

import { INITIAL_FETCH_STATUS_INFO } from '../constants/status';

const useProductsFetch = (sourcePath) => {
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
      const sourceResponse = await fetch(sourcePath);

      if (sourceResponse.ok) {
        const jsonResponse = await sourceResponse.json();

        setFetchInfo(prevInfo => ({
          ...prevInfo,
          status: {
            ...prevInfo.status,
            loading: false,
            success: true,
          },
          products: jsonResponse.data,
        }));
      }

      if (!sourceResponse.ok) setError();
    } catch (error) {
      setError();
    }
  };

  return [fetchSource, fetchInfo];
};

export default useProductsFetch;
