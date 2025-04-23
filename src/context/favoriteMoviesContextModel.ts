export interface Movie {
	imdbID: string;
	Title: string;
	Director: string;
	imdbRating: string;
	Poster: string;
	Released: string;
}

export interface favoriteMoviesContextType {
	favoriteMovie: Movie[];
	addMovieToFavorites: (movie: Movie) => void;
	removeMovieFromFavorites: (id: string) => void;
}
