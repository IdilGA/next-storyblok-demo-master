import AppStateContext from 'app-state/app-state.context';
import { useContext } from 'react';

export const useAppState = () => useContext(AppStateContext);
