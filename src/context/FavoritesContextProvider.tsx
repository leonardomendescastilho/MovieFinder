import { ReactNode, useEffect, useState } from 'react';
import { Movie } from './favoriteMoviesContextModel';
import { favoriteMoviesContext } from './favoriteMoviesContext';
import { toast } from 'sonner';

export const FavoritesContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const initialFavoriteMoviesValue = (): Movie[] => {
		try {
			const storedFavoriteMovies: string | null =
				localStorage.getItem('favoritesMovies');
			return storedFavoriteMovies
				? (JSON.parse(storedFavoriteMovies) as Movie[])
				: [];
		} catch (error) {
			console.error('Erro ao carregar favoritos no Local Storage', error);
			return [];
		}
	};

	const [favoriteMovie, setFavoriteMovie] = useState<Movie[]>(
		initialFavoriteMoviesValue
	);

	useEffect(() => {
		localStorage.setItem('favoritesMovies', JSON.stringify(favoriteMovie));
	}, [favoriteMovie]);

	const addMovieToFavorites = (movie: Movie) => {
		setFavoriteMovie((prev) => {
			const isMovieFavorited = prev.some(
				(item) => item.imdbID === movie.imdbID
			);

			if (!isMovieFavorited) {
				toast.success('Filme adicionado aos favoritos com sucesso!');
				return [...prev, movie];
			} else {
				toast.error('Filme já foi adicionado aos favoritos.');
				return prev;
			}
		});
	};

	const removeMovieFromFavorites = (id: string) => {
		setFavoriteMovie((prev) => prev.filter((movie) => movie.imdbID !== id));
		toast.success('Filme removido dos favoritos com sucesso!');
	};

	const value = {
		favoriteMovie,
		addMovieToFavorites,
		removeMovieFromFavorites,
	};

	return (
		<favoriteMoviesContext.Provider value={value}>
			{children}
		</favoriteMoviesContext.Provider>
	);
};
