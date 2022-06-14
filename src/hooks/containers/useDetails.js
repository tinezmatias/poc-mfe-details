// Internal
import { useGetByIdQuery } from '../index.js';

export function useDetails() {
  const { movie, isLoading, isError: showError } = useGetByIdQuery();

  const showLoading = !showError && isLoading;
  const showMovie = !showError && movie;
  const showMessage = !showMovie && !isLoading;
  const darkBg = showLoading || showMovie;

  const containerProps = {
    image: movie?.backdrop_path,
    darkBg: Boolean(darkBg),
  };

  return {
    movie,
    showLoading,
    showMovie,
    showMessage,
    showError,
    containerProps,
  };
}
