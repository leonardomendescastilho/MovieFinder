import { Star } from 'lucide-react';
import { Button } from '../button';
import { favoriteCardProps } from './favoriteCardModel';

export const FavoriteCardView = ({ movie, onRemove }: favoriteCardProps) => {
	return (
		<article
			key={movie.imdbID}
			className="max-w-[15rem] sm:max-w-xs mx-auto h-auto max-h-[400px] flex flex-col p-4 transition-all duration-300 ease-in-out group border rounded hover:shadow-2xl hover:border-foreground/50 focus-within:ring-1 focus-within:ring-primary relative"
			aria-labelledby={`movie-title-${movie.imdbID}`}
		>
			<div className="absolute top-30 right-2 sm:right-4 sm:top-4  z-[10000] px-2 py-1 sm:px-4 sm:py-1 bg-chart-4 rounded">
				<span className="flex gap-1 items-center font-semibold  text-sm md:text-base/6  tracking-tighter">
					<Star
						size={16}
						fill=""
					/>
					{movie.imdbRating}
				</span>
			</div>
			<div className="overflow-hidden mb-6 rounded transition-transform duration-300 group-hover:scale-[1.02] hover:shadow-2xl">
				<img
					className="object-cover h-auto w-full 
          transition-transform duration-500
          group-hover:scale-105"
					src={movie.Poster}
					alt={`Poster of the movie ${movie.Title}`}
					aria-hidden="true"
				/>
			</div>
			<div className="flex flex-col gap-6 p-2 mb-4">
				<div className="border-b pb-2">
					<h2
						id={`movie-title-${movie.imdbID}`}
						className="text-secondary-foreground text-balance font-title text-center text-lg sm:text-xl group-hover:text-primary  transition-all duration-200 ease-in-out"
					>
						{movie.Title}
					</h2>
				</div>

				<div className="flex  justify-between items-center text-xs sm:text-sm font-base font-semibold tracking-tighter  text-balance">
					<p className="text-start">
						<span className="sr-only">Data de lançamento:</span>
						{movie.Released}
					</p>
					<p className="text-end">
						<span className="sr-only">Diretor:</span>
						{movie.Director}
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<Button
					onClick={() => onRemove(movie.imdbID)}
					aria-label={`Remover ${movie.Title} dos favoritos`}
					text="Remover dos Favoritos"
				/>
			</div>
		</article>
	);
};
