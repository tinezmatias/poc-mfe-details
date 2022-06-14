// Vendor
import axios from 'axios';
// Internals
import { queryBuilder } from '../utils';
import { API_BASE_URL } from '../constants';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

/**
 * Get external id by tmdb id
 * e.x: https://api.themoviedb.org/3/movie/557/external_ids?api_key=apikey
 */
export const getExternalId = async (id) => {
  const url = queryBuilder(`/movie/${id}/external_ids`);
  const response = await apiClient.get(url);
  return response.data;
};

/**
 * Get one movie by id
 * e.x: https://api.themoviedb.org/3/find/tt0145487?api_key=apikey&language=en-US&external_source=imdb_id
 */
export const getMovieByExternalId = async (id, source) => {
  const url = queryBuilder(`/find/${id}`, ['language'], {
    external_source: source,
  });
  const response = await apiClient.get(url);
  return response.data;
};
