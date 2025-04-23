import { Link } from 'react-router-dom';
import { useFavoritesContext } from '../../hook/useFavoritesContext';
import { MoveLeft } from 'lucide-react';
import { FavoriteCard } from '../../components/favoriteCard';
import { favoriteCardListProps } from '../../components/favoriteCard/favoriteCardModel';
import { Helmet } from 'react-helmet-async';

const EmptyFavorites = () => (
	<div className="flex flex-col h-screen w-full  justify-center items-center gap-4">
		<h1 className="text-primary text-balance font-title text-center text-xl md:text-2xl ">
			Não existem filmes adicionados a sua lista de favoritos!
		</h1>

		<div className="text-xs md:text-sm font-base font-semibold tracking-tighter justify-between">
			<Link
				className="flex items-center gap-1 "
				to={'/'}
				aria-label="Voltar para a página inicial"
			>
				<MoveLeft
					size={14}
					aria-hidden="true"
				/>
				Voltar
			</Link>
		</div>
	</div>
);

const FavoriteCardList = ({
	favoriteMovie,
	removeMovieFromFavorites,
}: favoriteCardListProps) => {
	return (
		<div className="flex flex-col text-center p-6">
			<div className="flex-shrink-0 mb-4">
				<h1 className="text-3xl/12 sm:text-4xl/12 font-semibold text-primary tracking-tight md:text-balance font-title">
					Seus Filmes Favoritos
				</h1>
			</div>
			<div className="w-full h-full flex flex-wrap gap-6 pt-4 ">
				{favoriteMovie?.map((movie) => (
					<FavoriteCard
						key={movie.imdbID}
						movie={movie}
						onRemove={removeMovieFromFavorites}
					/>
				))}
			</div>
		</div>
	);
};

export const FavoriteView = () => {
	const { favoriteMovie, removeMovieFromFavorites } = useFavoritesContext();

	return (
		<>
			<Helmet>
				<title>Seus Filmes Favoritos | MovieFinder</title>
				<meta
					name="description"
					content="Veja a lista de filmes que você marcou como favoritos no MovieFinder."
				/>
			</Helmet>
			<section className="">
				{favoriteMovie.length === 0 ? (
					<EmptyFavorites />
				) : (
					<FavoriteCardList
						favoriteMovie={favoriteMovie}
						removeMovieFromFavorites={removeMovieFromFavorites}
					/>
				)}
			</section>
		</>
	);
};
