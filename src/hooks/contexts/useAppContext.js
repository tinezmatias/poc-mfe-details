// Vendor
import { useContext } from 'react';
// Internal
import { AppContext } from '../../context';

export const useAppContext = () => {
  const state = useContext(AppContext);

  if (!state) {
    throw new Error('AppContext should we used under the app provider');
  }

  return { ...state };
};
