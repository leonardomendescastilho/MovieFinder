import { createContext } from 'react';
import { favoriteMoviesContextType } from './favoriteMoviesContextModel';

export const favoriteMoviesContext = createContext<
	favoriteMoviesContextType | undefined
>(undefined);
