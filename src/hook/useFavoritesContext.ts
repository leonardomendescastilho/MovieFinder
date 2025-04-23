import { useContext } from 'react';
import { favoriteMoviesContextType } from '../context/favoriteMoviesContextModel';
import { favoriteMoviesContext } from '../context/favoriteMoviesContext';

export const useFavoritesContext = (): favoriteMoviesContextType => {
	const context = useContext(favoriteMoviesContext);

	if (!context) {
		throw new Error();
	}
	return context;
};
