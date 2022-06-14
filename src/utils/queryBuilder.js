// Internal
import { API_KEY, QUERY_STRING } from '../constants';

/**
 * This function is to be able to scale, use different urls,
 * different params, handle pagination or different filters, etc.
 */
export const queryBuilder = (baseUrl, params = [], extraParams = {}) => {
  let result = `${baseUrl}?api_key=${API_KEY}`;

  params.forEach((paramKey) => {
    result = `${result}&${paramKey}=${QUERY_STRING[paramKey]}`;
  });

  Object.keys(extraParams).forEach((paramKey) => {
    result = `${result}&${paramKey}=${extraParams[paramKey]}`;
  });

  return result;
};
