import { CardContentProps } from './CardContentModel';
import { CardHeader } from '../cardHeader/';
import { CardDetails } from '../cardDetails/';
import { CardFooter } from '../cardFooter/';
import { CardPoster } from '../cardPoster/';
import { CardRating } from '../cardRating/';

export const CardContentView = ({ data }: CardContentProps) => {
	return (
		<div className="flex flex-col items-center gap-4 w-[300px] md:w-[400px] lg:w-[500px] relative justify-center p-2">
			<CardRating imdbRating={data.imdbRating} />
			<CardPoster
				Poster={data.Poster}
				Title={data.Title}
			/>
			<div className="border rounded-2xl p-2">
				<CardHeader
					Title={data.Title}
					Plot={data.Plot}
				/>
				<CardDetails
					Director={data.Director}
					Writer={data.Writer}
					Genre={data.Genre}
					Runtime={data.Runtime}
					Awards={data.Awards}
					Released={data.Released}
					Actors={data.Actors}
				/>
			</div>
			<CardFooter data={data} />
		</div>
	);
};
