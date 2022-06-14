// Vendor
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// Internal
import { getExternalId } from '../../services';
import { EXTERNAL_ID_KEY } from '../../constants';

export const useGetExternalResource = (shouldFetchMovie, movieId) => {
  const [data, setExternalData] = useState({
    externalResource: '',
    externalId: '',
  });

  // Handle no Movie from state
  const onSuccesExternalId = (result) => {
    const keys = Object.keys(result);

    keys.some((externalResource) => {
      let shouldStop = false;
      if (externalResource !== 'id') {
        const externalId = result[externalResource];
        if (externalId) {
          setExternalData({ externalResource, externalId });
          shouldStop = true;
        }
      }
      return shouldStop;
    });
  };

  const {
    isLoading,
    isError,
    refetch: fetchExternalId,
  } = useQuery([EXTERNAL_ID_KEY, movieId], async () => getExternalId(movieId), {
    enabled: false,
    onSuccess: onSuccesExternalId,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (shouldFetchMovie) {
      fetchExternalId();
    }
  }, [shouldFetchMovie, fetchExternalId]);

  return {
    isLoading,
    isError,
    data,
  };
};
