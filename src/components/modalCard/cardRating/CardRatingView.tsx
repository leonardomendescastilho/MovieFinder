import { CardRatingProps } from './CardRatingModel';
import { Star } from 'lucide-react';

export const CardRatingView = ({ imdbRating }: CardRatingProps) => {
	return (
		<div className="absolute top-2 right-2 sm:right-4 sm:top-4  z-[10000] px-2 py-1 sm:px-4 sm:py-1 bg-chart-4 rounded">
			<span className="flex gap-1 items-center font-semibold  text-sm md:text-base/6  tracking-tighter">
				<Star
					size={16}
					fill=""
				/>
				{imdbRating}
			</span>
		</div>
	);
};
