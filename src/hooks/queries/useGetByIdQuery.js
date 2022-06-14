// Vendor
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProviderTypes } from '../../context/App/constants.js';
// Internal
import {
  useAppContext,
  useGetExternalResource,
  useGetMovieByExternalResource,
} from '../index.js';

export function useGetByIdQuery() {
  const [movie, setMovie] = useState();
  const [shouldFetchMovie, setShouldFetchMovie] = useState(false);

  const { movieid } = useParams();

  // Handle Movie from state
  const {
    state: { data },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    if (data && data.id === movieid) {
      setMovie(data);
    } else {
      setShouldFetchMovie(true);
    }
  }, [data, movieid]);

  // Hanlde movie from api
  const { data: externalData, ...external } = useGetExternalResource(
    shouldFetchMovie,
    movieid
  );

  const { result, ...rest } = useGetMovieByExternalResource(externalData);

  useEffect(() => {
    if (result) {
      setMovie(result);
      dispatch({ type: ProviderTypes.UpdateData, payload: result });
    }
  }, [result, dispatch]);

  const isLoading = external.isLoading || rest.isLoading;
  const isError = external.isError || rest.isError;

  return {
    movie,
    isLoading,
    isError,
  };
}
