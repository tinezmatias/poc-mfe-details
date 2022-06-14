import React from 'react';
// Internal
import { useDetails } from '../../hooks';
import {
  DetailsCard,
  DetailsContainer,
  ErrorMessage,
  Message,
  MovieDetailsLoader,
} from '../../components';
import { TEXT_NOT_FOUND_MESSAGE } from '../../constants';

export default function Details() {
  const {
    movie,
    showLoading,
    showMovie,
    showMessage,
    showError,
    containerProps,
  } = useDetails();

  return (
    <DetailsContainer {...containerProps}>
      {showError && <ErrorMessage />}
      {showLoading && <MovieDetailsLoader />}
      {showMovie && <DetailsCard movie={movie} />}
      {showMessage && <Message text={TEXT_NOT_FOUND_MESSAGE} />}
    </DetailsContainer>
  );
}
