// Vendor
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// Internal
import { MOVIE_BY_ID_KEY } from '../../constants';
import { getMovieByExternalId } from '../../services';

export const useGetMovieByExternalResource = ({
  externalId,
  externalResource,
}) => {
  const [result, setResult] = useState();

  const onSuccess = (data) => setResult(data.movie_results[0]);

  const {
    isLoading,
    isError,
    refetch: fetchMovie,
  } = useQuery(
    [MOVIE_BY_ID_KEY, externalId],
    async () => getMovieByExternalId(externalId, externalResource),

    { enabled: false, onSuccess, refetchOnMount: false }
  );

  useEffect(() => {
    if (externalResource && externalId) {
      fetchMovie();
    }
  }, [externalResource, externalId, fetchMovie]);

  return {
    result,
    isLoading,
    isError,
  };
};
