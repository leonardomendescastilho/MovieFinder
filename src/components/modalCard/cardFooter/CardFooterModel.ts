import { MovieDataResponse } from '../../../service/type';

export interface CardFooterProps {
	data: MovieDataResponse;
}

export interface CardFooterViewModelResult {
	handleAddMovieToFavorite: () => void;
}
