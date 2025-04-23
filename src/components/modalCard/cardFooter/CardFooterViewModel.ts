import { useFavoritesContext } from '../../../hook/useFavoritesContext';
import { CardFooterProps, CardFooterViewModelResult } from './CardFooterModel';

export const useCardFooterViewModel = ({
	data,
}: CardFooterProps): CardFooterViewModelResult => {
	const { addMovieToFavorites } = useFavoritesContext();
	const { imdbID, Title, Director, imdbRating, Poster, Released } = data;

	const handleAddMovieToFavorite = () => {
		const movie = {
			imdbID,
			Title,
			Director,
			imdbRating,
			Poster,
			Released,
		};
		addMovieToFavorites(movie);
	};
	return { handleAddMovieToFavorite };
};
