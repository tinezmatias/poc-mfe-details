// Internal
import { IMG_BASE_URL } from '../constants';

export const getImageUrl = (width, id) => {
  return `${IMG_BASE_URL}/${width}/${id}`;
};

export const getImageBackground = (width, id) => {
  const url = getImageUrl(width, id);
  return {
    backgroundImage: `url("${url}")`,
  };
};

export * from './queryBuilder';
