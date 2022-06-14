// internal
import './styles.css';
import React from 'react';

const skeletons = {
  MovieDetails: 'ds-movie-details-loader',
  Moviecard: 'ds-movie-card-loader',
  Page: 'ds-page-loader',
};

function Skeleton({ type }) {
  const className = `ds-base-skeleton ${type}`;
  return <div className={className} data-testid='skeleton' />;
}

export function MovieDetailsLoader() {
  return <Skeleton type={skeletons.MovieDetails} />;
}
