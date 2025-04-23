import { Movie } from "../../context/favoriteMoviesContextModel";

export interface favoriteCardProps {
  movie: Movie;
  onRemove: (movieId: string) => void;
}


export interface favoriteCardListProps {
  favoriteMovie: Movie[];
  removeMovieFromFavorites: (movieId: string) => void;
}